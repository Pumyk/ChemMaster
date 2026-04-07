import React, { useEffect } from 'react';
import { Topic } from '../data/questions';
import { generatePDF } from '../utils/pdfGenerator';
import { Download, RefreshCw, Home, Check, X, Loader2, Trophy, LayoutDashboard, FileText, CheckCircle, XCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

interface ResultsProps {
  topic: Topic;
  answers: Record<number, number>;
  score: number;
  totalQuestions?: number;
  onRetry: () => void;
  onHome: () => void;
  reviewOnly?: boolean;
}

export const Results: React.FC<ResultsProps> = ({ topic, answers, score, totalQuestions, onRetry, onHome, reviewOnly = false }) => {
  const total = totalQuestions || topic.questions.length;
  const percentage = Math.round((score / total) * 100);
  const { isDark } = useTheme();
  const { user } = useAuth();
  const [isGenerating, setIsGenerating] = React.useState(false);
  
  useEffect(() => {
    if (reviewOnly || !user) return;
    
    const saveResults = async () => {
      const path = 'quiz_results';
      try {
        await addDoc(collection(db, path), {
          userId: user.id,
          topicId: topic.id,
          topicTitle: topic.title,
          score,
          total: total,
          answers: answers,
          createdAt: serverTimestamp()
        });
      } catch (err) {
        handleFirestoreError(err, OperationType.CREATE, path);
      }
    };

    saveResults();
  }, [topic, score, answers, reviewOnly, user]);


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
    <div className="w-full max-w-4xl mx-auto p-4 md:p-8 animate-in fade-in slide-in-from-bottom-8 duration-700 font-sans">
      <div className="m3-card p-10 text-center mb-10 shadow-2xl relative overflow-hidden">
        {/* Decorative background for score */}
        <div className="absolute top-0 left-0 w-full h-2 bg-m3-surface-variant dark:bg-slate-800">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${percentage >= 80 ? 'bg-emerald-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        <div className={`w-32 h-32 rounded-[2.5rem] mx-auto mb-8 flex items-center justify-center shadow-xl ${percentage >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : percentage >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
          <Trophy className="w-16 h-16" />
        </div>
        
        <h2 className="text-5xl font-display font-black text-m3-on-surface dark:text-white mb-4 tracking-tight">
          {percentage}% Score
        </h2>
        <h3 className={`text-2xl font-display font-bold mb-6 ${gradeColor}`}>{gradeText}</h3>
        <p className="text-2xl text-m3-on-surface-variant dark:text-slate-400 mb-10 font-display font-medium">
          You got <span className="text-m3-primary dark:text-m3-primary-container font-bold">{score}</span> out of <span className="font-bold">{total}</span> questions correct.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
          <button
            onClick={async () => {
              setIsGenerating(true);
              try {
                await generatePDF(topic, answers, score, total, isDark);
              } finally {
                setIsGenerating(false);
              }
            }}
            disabled={isGenerating}
            className="m3-button-primary flex-1 py-4 flex items-center justify-center gap-3 text-lg shadow-lg shadow-m3-primary/20 disabled:opacity-50"
          >
            {isGenerating ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <Download className="w-6 h-6" />
            )}
            {isGenerating ? 'Generating...' : 'Download PDF'}
          </button>
          
          <button
            onClick={onRetry}
            className="m3-button-tonal flex-1 py-4 flex items-center justify-center gap-3 text-lg"
          >
            <RefreshCw className="w-6 h-6" />
            Try Again
          </button>
        </div>

        <button
          onClick={onHome}
          className="mt-8 text-m3-on-surface-variant dark:text-slate-500 hover:text-m3-primary dark:hover:text-m3-primary-container flex items-center gap-2 mx-auto transition-colors font-display font-bold"
        >
          <Home className="w-5 h-5" />
          Back to Topics
        </button>
      </div>

      <div className="space-y-8">
        <h3 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white flex items-center gap-4 ml-2">
          <div className="p-2 bg-m3-secondary-container rounded-xl">
            <FileText className="w-7 h-7 text-m3-on-secondary-container" />
          </div>
          Detailed Review
        </h3>
        <div className="grid grid-cols-1 gap-6">
          {topic.questions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return (
              <div 
                key={q.id}
                className={`m3-card p-8 border-l-8 transition-all hover:shadow-xl ${isCorrect ? 'border-emerald-500' : 'border-red-500'}`}
              >
                <div className="flex justify-between items-start gap-6 mb-6">
                  <span className="text-sm font-display font-black text-m3-on-surface-variant dark:text-slate-500 uppercase tracking-widest bg-m3-surface-variant/30 dark:bg-slate-800/50 px-4 py-1.5 rounded-full">
                    Question {idx + 1}
                  </span>
                  {isCorrect ? (
                    <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-display font-bold bg-emerald-50 dark:bg-emerald-900/20 px-4 py-1.5 rounded-full border border-emerald-100 dark:border-emerald-900/30">
                      <Check className="w-5 h-5" /> Correct
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 font-display font-bold bg-red-50 dark:bg-red-900/20 px-4 py-1.5 rounded-full border border-red-100 dark:border-red-900/30">
                      <X className="w-5 h-5" /> Incorrect
                    </div>
                  )}
                </div>
                
                <p className="text-xl font-display font-bold text-m3-on-surface dark:text-white mb-8 leading-relaxed">{q.text}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {q.options.map((opt, optIdx) => {
                    let borderClass = "border-m3-surface-variant dark:border-slate-800";
                    let bgClass = "bg-m3-surface dark:bg-slate-950";
                    let textClass = "text-m3-on-surface dark:text-slate-300";

                    if (optIdx === q.correctAnswer) {
                      borderClass = "border-emerald-500";
                      bgClass = "bg-emerald-50 dark:bg-emerald-900/20";
                      textClass = "text-emerald-700 dark:text-emerald-400 font-bold";
                    } else if (optIdx === userAnswer && !isCorrect) {
                      borderClass = "border-red-500";
                      bgClass = "bg-red-50 dark:bg-red-900/20";
                      textClass = "text-red-700 dark:text-red-400 font-bold";
                    }

                    return (
                      <div key={optIdx} className={`p-4 rounded-xl border-2 ${borderClass} ${bgClass} ${textClass} font-display text-sm flex items-center gap-3`}>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-black ${optIdx === q.correctAnswer ? 'bg-emerald-500 text-white border-emerald-500' : optIdx === userAnswer ? 'bg-red-500 text-white border-red-500' : 'border-m3-surface-variant text-m3-on-surface-variant'}`}>
                          {String.fromCharCode(65 + optIdx)}
                        </div>
                        {opt}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-m3-primary-container/30 dark:bg-slate-800/50 p-6 rounded-2xl border border-m3-primary-container/50 dark:border-slate-700">
                  <p className="text-xs font-black text-m3-primary dark:text-m3-primary-container mb-2 uppercase tracking-widest">Explanation</p>
                  <p className="text-sm text-m3-on-surface dark:text-slate-300 leading-relaxed font-display font-medium">{q.explanation}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
