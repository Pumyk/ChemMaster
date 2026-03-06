import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { supabase } from '../lib/supabase';
import { Trophy, Clock, BookOpen, Activity, Play, BarChart3 } from 'lucide-react';
import { Subject, Course } from '../data/subjects';

interface DashboardProps {
  subject: Subject;
  onStartExam: (course: Course) => void;
  onSelectCourse: (course: Course) => void;
  currentCourse: Course;
}

export const Dashboard: React.FC<DashboardProps> = ({ subject, onStartExam, onSelectCourse, currentCourse }) => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalQuizzes: 0,
    averageScore: 0,
    lastExamScore: null as number | null,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    const fetchStats = async () => {
      try {
        const { data, error } = await supabase
          .from('quiz_results')
          .select('score, total, created_at, topic_title')
          .eq('user_id', user.id)
          .order('created_at', { ascending: false });

        if (error) throw error;

        if (data && data.length > 0) {
          const totalQuizzes = data.length;
          const totalScore = data.reduce((acc, curr) => acc + (curr.score / curr.total) * 100, 0);
          const averageScore = Math.round(totalScore / totalQuizzes);
          
          // Find last "Exam" score (assuming topic_title contains "Exam")
          const lastExam = data.find(r => r.topic_title.includes('Exam'));
          const lastExamScore = lastExam ? Math.round((lastExam.score / lastExam.total) * 100) : null;

          setStats({
            totalQuizzes,
            averageScore,
            lastExamScore,
          });
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user]);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-4">
          {user?.user_metadata?.avatar_url ? (
            <img 
              src={user.user_metadata.avatar_url} 
              alt="Profile" 
              className="w-16 h-16 rounded-full object-cover border-2 border-white dark:border-slate-700 shadow-md"
            />
          ) : (
            <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center border-2 border-slate-100 dark:border-slate-700 shadow-md overflow-hidden">
              <img src="/logo.svg" alt="Profile" className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
              Welcome back, {user?.user_metadata?.name || 'Student'}!
            </h1>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Ready to master your {subject.title} courses?
            </p>
          </div>
        </div>
        <div className="flex bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-x-auto max-w-full">
          {subject.courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                currentCourse.id === course.id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700'
              }`}
            >
              {course.id}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Quizzes Taken</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {loading ? '...' : stats.totalQuizzes}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-xl text-amber-600 dark:text-amber-400">
              <Activity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Average Score</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {loading ? '...' : `${stats.averageScore}%`}
              </h3>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
              <Trophy className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Last Exam Score</p>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                {loading ? '...' : (stats.lastExamScore !== null ? `${stats.lastExamScore}%` : 'N/A')}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Mode Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 dark:from-blue-900 dark:to-slate-900 rounded-3xl p-8 md:p-12 text-white shadow-xl">
        <div className="absolute top-0 right-0 p-8 opacity-10">
          <Clock className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            Exam Mode
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the real challenge?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Simulate a real exam environment. 
            <br />
            {subject.courses.map(course => (
              <React.Fragment key={course.id}>
                <strong>{course.id}:</strong> {course.topics.length > 5 ? '35' : '15'} questions in {course.topics.length > 5 ? '30' : '10'} minutes.
                <br />
              </React.Fragment>
            ))}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
            {subject.courses.map((course) => (
              <button
                key={course.id}
                onClick={() => onStartExam(course)}
                className="px-6 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-lg transition-all shadow-lg shadow-white/10 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95"
              >
                <Play className="w-5 h-5" />
                Start {course.id} Exam
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity or Quick Links could go here */}
      <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
        <BarChart3 className="w-4 h-4" />
        <span>Select a course above to view specific topics below.</span>
      </div>
    </div>
  );
};
