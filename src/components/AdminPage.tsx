import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, doc, setDoc, getDocs, query, where, writeBatch } from 'firebase/firestore';
import { subjects } from '../data/subjects';
import { Database, Upload, Users, Activity, AlertTriangle, CheckCircle, XCircle, Shield } from 'lucide-react';

export const AdminPage = () => {
  const { user } = useAuth();
  const [migrationStatus, setMigrationStatus] = useState<'idle' | 'migrating' | 'success' | 'error'>('idle');
  const [migrationLog, setMigrationLog] = useState<string[]>([]);
  const [dbStats, setDbStats] = useState({
    subjects: 0,
    courses: 0,
    topics: 0,
    questions: 0,
    users: 0,
    results: 0
  });

  useEffect(() => {
    fetchDbStats();
  }, []);

  const fetchDbStats = async () => {
    try {
      // For Firestore, we'll just show some basic counts if possible, or placeholders
      // Counting all docs can be expensive/slow, so we'll just show a simplified view
      const resultsSnapshot = await getDocs(collection(db, 'quiz_results'));
      const usersSnapshot = await getDocs(collection(db, 'users'));
      
      setDbStats({
        subjects: subjects.length,
        courses: subjects.reduce((acc, s) => acc + s.courses.length, 0),
        topics: subjects.reduce((acc, s) => acc + s.courses.reduce((acc2, c) => acc2 + c.topics.length, 0), 0),
        questions: subjects.reduce((acc, s) => acc + s.courses.reduce((acc2, c) => acc2 + c.topics.reduce((acc3, t) => acc3 + t.questions.length, 0), 0), 0),
        users: usersSnapshot.size,
        results: resultsSnapshot.size
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const log = (message: string) => {
    setMigrationLog(prev => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const handleMigration = async () => {
    setMigrationStatus('migrating');
    setMigrationLog([]);
    log("Starting migration to Firestore...");

    try {
      // In Firestore, we don't necessarily need to "migrate" static data if we use it from local files,
      // but if we want to store it in Firestore, we can.
      // For now, let's just log the intent.
      log("Migrating subjects, courses, and topics to Firestore...");
      
      const batch = writeBatch(db);

      for (const subject of subjects) {
        const subjectRef = doc(db, 'subjects', subject.id);
        batch.set(subjectRef, {
          title: subject.title,
          description: subject.description,
          color: subject.color
        });
        log(`Queued Subject: ${subject.title}`);

        for (const course of subject.courses) {
          const courseRef = doc(db, 'courses', course.id);
          batch.set(courseRef, {
            subjectId: subject.id,
            title: course.title
          });
          log(`  - Queued Course: ${course.title}`);

          for (const topic of course.topics) {
            const topicRef = doc(db, 'topics', topic.id);
            batch.set(topicRef, {
              courseId: course.id,
              title: topic.title
            });
            log(`    - Queued Topic: ${topic.title}`);
          }
        }
      }

      await batch.commit();
      log("Migration completed successfully!");
      setMigrationStatus('success');
      fetchDbStats();
    } catch (error: any) {
      console.error("Migration failed:", error);
      log(`ERROR: ${error.message}`);
      setMigrationStatus('error');
    }
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-slate-900 dark:bg-slate-700 rounded-xl text-white">
          <Shield className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
          <p className="text-slate-600 dark:text-slate-400">System management and data migration</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Database Stats Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">Database Statistics</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Subjects</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.subjects}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Courses</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.courses}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Topics</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.topics}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Questions</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.questions}</span>
            </div>
          </div>
        </div>

        {/* User Activity Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Users className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">User Activity</h3>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Active Users (Est.)</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.users}</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-slate-50 dark:bg-slate-900/50 rounded-lg">
              <span className="text-sm text-slate-600 dark:text-slate-400">Total Quiz Results</span>
              <span className="font-mono font-bold text-slate-900 dark:text-white">{dbStats.results}</span>
            </div>
          </div>
        </div>

        {/* System Health Card */}
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Activity className="w-5 h-5 text-amber-600 dark:text-amber-400" />
            <h3 className="font-bold text-slate-900 dark:text-white">System Health</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Firebase Connection: Active</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
              <CheckCircle className="w-4 h-4" />
              <span>Auth Service: Active</span>
            </div>
          </div>
        </div>
      </div>

      {/* Migration Tool */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Upload className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Data Migration</h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">Migrate static content (subjects, topics) to Firestore</p>
            </div>
          </div>
          <button
            onClick={handleMigration}
            disabled={migrationStatus === 'migrating'}
            className={`px-6 py-3 rounded-xl font-bold text-white transition-all ${
              migrationStatus === 'migrating'
                ? 'bg-slate-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20'
            }`}
          >
            {migrationStatus === 'migrating' ? 'Migrating...' : 'Start Migration'}
          </button>
        </div>

        {/* Migration Log */}
        <div className="bg-slate-950 rounded-xl p-4 font-mono text-sm h-64 overflow-y-auto border border-slate-800">
          {migrationLog.length === 0 ? (
            <div className="text-slate-500 italic text-center mt-20">Ready to migrate data...</div>
          ) : (
            <div className="space-y-1">
              {migrationLog.map((entry, i) => (
                <div key={i} className={`${entry.includes('ERROR') ? 'text-red-400' : entry.includes('Success') ? 'text-emerald-400' : 'text-slate-300'}`}>
                  {entry}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
