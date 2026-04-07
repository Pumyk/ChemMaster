import React, { useState, useEffect } from 'react';
import { Calendar, Award, ChevronRight, Loader2, History } from 'lucide-react';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, query, where, orderBy, onSnapshot, Timestamp } from 'firebase/firestore';
import { useAuth } from '../context/AuthContext';

interface QuizResult {
  id: string;
  topicId: string;
  topicTitle: string;
  score: number;
  total: number;
  answers: string; // JSON string
  createdAt: string;
}

interface QuizHistoryProps {
  onViewResult?: (result: QuizResult) => void;
}

export const QuizHistory: React.FC<QuizHistoryProps> = ({ onViewResult }) => {
  const [history, setHistory] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const path = 'quiz_results';
    const q = query(
      collection(db, path),
      where('userId', '==', user.id),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results: QuizResult[] = snapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          topicId: data.topicId,
          topicTitle: data.topicTitle,
          score: data.score,
          total: data.total,
          answers: typeof data.answers === 'string' ? data.answers : JSON.stringify(data.answers),
          createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate().toISOString() : data.createdAt
        };
      });
      setHistory(results);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, path);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-12 h-12 animate-spin text-m3-primary" />
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-20 m3-card transition-colors">
        <History className="w-20 h-20 text-m3-surface-variant mx-auto mb-6" />
        <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-3">No History Yet</h3>
        <p className="text-m3-on-surface-variant dark:text-slate-400 font-display">Complete your first quiz to see your results here!</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 font-sans">
      <h2 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-8 flex items-center gap-3">
        <div className="p-2 bg-m3-primary-container rounded-xl">
          <History className="w-7 h-7 text-m3-on-primary-container" />
        </div>
        Your Quiz History
      </h2>
      
      <div className="grid grid-cols-1 gap-6">
        {history.map((item) => {
          const percentage = Math.round((item.score / item.total) * 100);
          const date = new Date(item.createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          });

          return (
            <div 
              key={item.id}
              onClick={() => onViewResult?.(item)}
              className="m3-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer group hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-6">
                <div className={`p-4 rounded-2xl ${percentage >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : percentage >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold text-m3-on-surface dark:text-white group-hover:text-m3-primary dark:group-hover:text-m3-primary-container transition-colors">{item.topicTitle}</h4>
                  <div className="flex items-center gap-3 text-sm text-m3-on-surface-variant dark:text-slate-500 mt-2 font-display font-medium">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-10 flex-1 md:flex-none">
                <div className="text-right min-w-[120px]">
                  <p className="text-3xl font-display font-bold text-m3-on-surface dark:text-white">{percentage}%</p>
                  <p className="text-xs text-m3-on-surface-variant dark:text-slate-500 uppercase tracking-widest font-display font-bold mb-3">
                    {item.score} / {item.total} Correct
                  </p>
                  <div className="w-full bg-m3-surface-variant dark:bg-slate-800 rounded-full h-2.5 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 ${percentage >= 80 ? 'bg-emerald-500' : percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'}`} 
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
                <ChevronRight className="w-6 h-6 text-m3-on-surface-variant dark:text-slate-600 group-hover:text-m3-primary dark:group-hover:text-m3-primary-container transition-all group-hover:translate-x-2" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

