import React, { useState, useEffect } from 'react';
import { Calendar, Award, ChevronRight, Loader2, History } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useAuth } from '../context/AuthContext';

interface QuizResult {
  id: number;
  topic_id: string;
  topic_title: string;
  score: number;
  total: number;
  answers: string; // JSON string or object depending on how Supabase returns it
  created_at: string;
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

    const fetchHistory = async () => {
      try {
        const { data, error } = await supabase
          .from('quiz_results')
          .select('*')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;
        
        // Ensure answers is a string if it comes back as an object, or handle it in App.tsx
        // App.tsx expects a JSON string for answers in handleViewPastResult: JSON.parse(result.answers)
        // If Supabase returns an object (jsonb), we might need to stringify it or update App.tsx.
        // Let's check App.tsx. It does JSON.parse(result.answers).
        // If Supabase returns an object, JSON.parse([object Object]) will fail.
        // So we should normalize it here.
        
        const normalizedHistory = (data || []).map(item => ({
          ...item,
          answers: typeof item.answers === 'string' ? item.answers : JSON.stringify(item.answers)
        }));

        setHistory(normalizedHistory);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [user]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
      </div>
    );
  }

  if (history.length === 0) {
    return (
      <div className="text-center py-12 bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 transition-colors">
        <History className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">No History Yet</h3>
        <p className="text-slate-500 dark:text-slate-400">Complete your first quiz to see your results here!</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
        <History className="w-6 h-6 text-blue-600" />
        Your Quiz History
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {history.map((item) => {
          const percentage = Math.round((item.score / item.total) * 100);
          const date = new Date(item.created_at).toLocaleDateString(undefined, {
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
              className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${percentage >= 80 ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600' : percentage >= 60 ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600' : 'bg-red-100 dark:bg-red-900/30 text-red-600'}`}>
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{item.topic_title}</h4>
                  <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-slate-400 mt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {date}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8">
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900 dark:text-white">{percentage}%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                    {item.score} / {item.total} Correct
                  </p>
                </div>
                <div className="h-12 w-1 bg-slate-100 dark:bg-slate-700 rounded-full hidden md:block"></div>
                <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-all group-hover:translate-x-1" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

