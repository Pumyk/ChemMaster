import React, { useEffect } from 'react';
import { Topic } from '../data/questions';
import { generatePDF } from '../utils/pdfGenerator';
import { Download, RefreshCw, Home, Check, X, Loader2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ResultsProps {
  topic: Topic;
  answers: Record<number, number>;
  score: number;
  onRetry: () => void;
  onHome: () => void;
  reviewOnly?: boolean;
}

export const Results: React.FC<ResultsProps> = ({ topic, answers, score, onRetry, onHome, reviewOnly = false }) => {
  const percentage = Math.round((score / topic.questions.length) * 100);
  const { isDark } = useTheme();
  const [isGenerating, setIsGenerating] = React.useState(false);
  
  useEffect(() => {
    if (reviewOnly) return;
    
    // Save results to database
    fetch('/api/quiz/results', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topicId: topic.id,
        topicTitle: topic.title,
        score,
        total: topic.questions.length,
        answers
      })
    }).catch(err => console.error("Failed to save quiz results:", err));
  }, [topic, score, answers, reviewOnly]);


  let gradeColor = "text-red-500";
  let gradeText = "Needs Improvement";
  
  if (percentage >= 80) {
    gradeColor = "text-emerald-500";
    gradeText = "Excellent!";
  } else if (percentage >= 60) {
    gradeColor = "text-yellow-500";
    gradeText = "Good Job";
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 text-center shadow-2xl transition-colors">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Quiz Completed!</h2>
        <p className="text-slate-600 dark:text-slate-400 mb-8">Here's how you performed on {topic.title}</p>

        <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-8 border-slate-100 dark:border-slate-700"></div>
          <div className={`absolute inset-0 rounded-full border-8 ${gradeColor.replace('text', 'border')} opacity-20`}></div>
          <div className="text-center z-10">
            <span className={`text-5xl font-bold ${gradeColor}`}>{percentage}%</span>
            <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">{score} / {topic.questions.length}</p>
          </div>
        </div>

        <h3 className={`text-2xl font-bold mb-8 ${gradeColor}`}>{gradeText}</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
          <button
            onClick={async () => {
              setIsGenerating(true);
              try {
                await generatePDF(topic, answers, score, topic.questions.length, isDark);
              } finally {
                setIsGenerating(false);
              }
            }}
            disabled={isGenerating}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20"
          >
            {isGenerating ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Download className="w-5 h-5" />
            )}
            {isGenerating ? 'Generating...' : 'Download Report (PDF)'}
          </button>
          
          <button
            onClick={onRetry}
            className="flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-bold transition-all"
          >
            <RefreshCw className="w-5 h-5" />
            Try Again
          </button>
        </div>
        
        <button
          onClick={onHome}
          className="mt-6 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-2 mx-auto transition-colors"
        >
          <Home className="w-4 h-4" />
          Back to Topics
        </button>
      </div>

      {/* Detailed Review Section */}
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white px-2">Review Answers</h3>
        {topic.questions.map((q, index) => {
          const userAnswer = answers[q.id];
          const isCorrect = userAnswer === q.correctAnswer;

          return (
            <div 
              key={q.id} 
              id={`question-card-${q.id}`}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-md transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`mt-1 p-1 rounded-full ${isCorrect ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                  {isCorrect ? <Check className="w-5 h-5" /> : <X className="w-5 h-5" />}
                </div>
                <div className="flex-1">
                  <p className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                    {index + 1}. {q.text}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {q.options.map((opt, optIdx) => {
                      let borderClass = "border-slate-200 dark:border-slate-700";
                      let bgClass = "bg-slate-50 dark:bg-slate-900/50";
                      let textClass = "text-slate-600 dark:text-slate-400";

                      if (optIdx === q.correctAnswer) {
                        borderClass = "border-emerald-500";
                        bgClass = "bg-emerald-50 dark:bg-emerald-900/20";
                        textClass = "text-emerald-700 dark:text-emerald-400 font-semibold";
                      } else if (optIdx === userAnswer && !isCorrect) {
                        borderClass = "border-red-500";
                        bgClass = "bg-red-50 dark:bg-red-900/20";
                        textClass = "text-red-700 dark:text-red-400 font-semibold";
                      }

                      return (
                        <div key={optIdx} className={`p-3 rounded-lg border ${borderClass} ${bgClass} ${textClass} text-sm`}>
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </div>
                      );
                    })}
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-xl border border-blue-100 dark:border-blue-900/30">
                    <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-1 uppercase tracking-wider">Explanation</p>
                    <p className="text-sm text-blue-700 dark:text-blue-400 leading-relaxed">{q.explanation}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
