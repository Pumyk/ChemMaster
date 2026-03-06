import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { subjects } from '../data/subjects';
import { CheckCircle, AlertTriangle, Loader2 } from 'lucide-react';

export const MigrationTool: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const addLog = (msg: string) => setLogs(prev => [...prev, msg]);

  const runMigration = async () => {
    setStatus('running');
    setLogs([]);
    setProgress(0);
    
    try {
      addLog('Starting migration...');
      
      let totalItems = subjects.length;
      subjects.forEach(s => {
        totalItems += s.courses.length;
        s.courses.forEach(c => {
          totalItems += c.topics.length;
          c.topics.forEach(t => {
            totalItems += t.questions.length;
          });
        });
      });
      
      let processed = 0;
      const updateProgress = () => {
        processed++;
        setProgress(Math.round((processed / totalItems) * 100));
      };

      for (const subject of subjects) {
        addLog(`Processing Subject: ${subject.title}`);
        
        // 1. Insert Subject
        const { error: subError } = await supabase
          .from('subjects')
          .upsert({
            id: subject.id,
            title: subject.title,
            description: subject.description,
            icon_name: subject.icon.displayName || subject.icon.name || 'BookOpen', // Fallback
            color: subject.color
          });
        
        if (subError) throw new Error(`Error inserting subject ${subject.id}: ${subError.message}`);
        updateProgress();

        for (const course of subject.courses) {
          addLog(`  Processing Course: ${course.title}`);
          
          // 2. Insert Course
          const { error: courseError } = await supabase
            .from('courses')
            .upsert({
              id: course.id,
              subject_id: subject.id,
              title: course.title
            });
            
          if (courseError) throw new Error(`Error inserting course ${course.id}: ${courseError.message}`);
          updateProgress();

          for (const topic of course.topics) {
            // 3. Insert Topic
            const { error: topicError } = await supabase
              .from('topics')
              .upsert({
                id: topic.id,
                course_id: course.id,
                title: topic.title
              });
              
            if (topicError) throw new Error(`Error inserting topic ${topic.id}: ${topicError.message}`);
            updateProgress();

            // 4. Insert Questions (Batch insert for performance)
            if (topic.questions.length > 0) {
              const questionsPayload = topic.questions.map(q => ({
                id: q.id,
                topic_id: topic.id,
                text: q.text,
                options: q.options, // Supabase handles JSON automatically
                correct_answer: q.correctAnswer,
                explanation: q.explanation,
                difficulty: q.difficulty || 'Medium'
              }));

              const { error: qError } = await supabase
                .from('questions')
                .upsert(questionsPayload);
                
              if (qError) throw new Error(`Error inserting questions for topic ${topic.id}: ${qError.message}`);
              
              processed += topic.questions.length;
              setProgress(Math.round((processed / totalItems) * 100));
            }
          }
        }
      }
      
      setStatus('success');
      addLog('Migration completed successfully!');
      
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      addLog(`ERROR: ${err.message}`);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white dark:bg-slate-800 rounded-xl shadow-lg mt-12">
      <h1 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Database Migration Tool</h1>
      
      <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-800 dark:text-blue-200 text-sm">
        <p className="font-semibold mb-2">Instructions:</p>
        <ol className="list-decimal list-inside space-y-1">
          <li>Run the SQL schema in your Supabase SQL Editor first.</li>
          <li>Click "Start Migration" below to upload your local data.</li>
          <li>Wait for completion.</li>
        </ol>
      </div>

      {status === 'idle' && (
        <button
          onClick={runMigration}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
        >
          Start Migration
        </button>
      )}

      {status === 'running' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-sm font-medium text-slate-600 dark:text-slate-400">
            <span>Migrating data...</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-center py-4 text-blue-600">
            <Loader2 className="w-6 h-6 animate-spin" />
          </div>
        </div>
      )}

      {status === 'success' && (
        <div className="p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-lg flex items-center gap-3">
          <CheckCircle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-bold">Migration Complete!</p>
            <p className="text-sm">All data has been successfully uploaded to Supabase.</p>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-3">
          <AlertTriangle className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-bold">Migration Failed</p>
            <p className="text-sm">Check the logs below for details.</p>
          </div>
        </div>
      )}

      <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-4">
        <h3 className="text-sm font-semibold text-slate-500 mb-2">Logs</h3>
        <div className="bg-slate-950 text-slate-300 p-4 rounded-lg font-mono text-xs h-64 overflow-y-auto">
          {logs.length === 0 ? (
            <span className="text-slate-600">Waiting to start...</span>
          ) : (
            logs.map((log, i) => <div key={i}>{log}</div>)
          )}
        </div>
      </div>
    </div>
  );
};
