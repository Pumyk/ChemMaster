import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { collection, query, where, orderBy, getDocs, Timestamp } from 'firebase/firestore';
import { Trophy, Clock, BookOpen, Activity, Play, BarChart3, GraduationCap } from 'lucide-react';
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
      const path = 'quiz_results';
      try {
        const q = query(
          collection(db, path),
          where('userId', '==', user.id),
          orderBy('createdAt', 'desc')
        );
        
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => doc.data());

        if (data && data.length > 0) {
          // Filter results for the current subject
          const subjectCourseIds = subject.courses.map(c => c.id);
          const subjectTopicIds = subject.courses.flatMap(c => c.topics.map(t => t.id));
          
          const subjectResults = data.filter(r => {
            // Check if it's a standard topic
            if (subjectTopicIds.includes(r.topicId)) return true;
            
            // Check if it's an exam for one of the subject's courses
            // Exam IDs format: exam-{courseId}-{timestamp}
            const isExam = subjectCourseIds.some(courseId => r.topicId.startsWith(`exam-${courseId}`));
            return isExam;
          });

          if (subjectResults.length > 0) {
            const totalQuizzes = subjectResults.length;
            const totalScore = subjectResults.reduce((acc, curr) => acc + (curr.score / curr.total) * 100, 0);
            const averageScore = Math.round(totalScore / totalQuizzes);
            
            // Find last "Exam" score for this subject
            const lastExam = subjectResults.find(r => r.topicTitle.includes('Exam'));
            const lastExamScore = lastExam ? Math.round((lastExam.score / lastExam.total) * 100) : null;

            setStats({
              totalQuizzes,
              averageScore,
              lastExamScore,
            });
          } else {
             // Reset stats if no results for this subject
             setStats({
              totalQuizzes: 0,
              averageScore: 0,
              lastExamScore: null,
            });
          }
        }
      } catch (err) {
        handleFirestoreError(err, OperationType.LIST, path);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [user, subject]); // Add subject to dependency array

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-in fade-in duration-700 font-sans">
      {/* Welcome Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-6">
          {user?.user_metadata?.avatar_url ? (
            <div className="relative">
              <img 
                src={user.user_metadata.avatar_url} 
                alt="Profile" 
                className="w-20 h-20 rounded-[2rem] object-cover border-4 border-white dark:border-slate-800 shadow-xl"
              />
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-m3-primary rounded-full flex items-center justify-center border-4 border-m3-surface dark:border-slate-900">
                <Trophy className="w-4 h-4 text-m3-on-primary" />
              </div>
            </div>
          ) : (
            <div className="w-20 h-20 rounded-[2rem] bg-m3-primary-container flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden">
              <GraduationCap className="w-10 h-10 text-m3-on-primary-container" />
            </div>
          )}
          <div>
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-m3-on-surface dark:text-white">
              Welcome back, {user?.user_metadata?.name || 'Student'}!
            </h1>
            <p className="text-m3-on-surface-variant dark:text-slate-400 mt-1 font-display font-medium">
              Ready to master your <span className="text-m3-primary dark:text-m3-primary-container">{subject.title}</span> courses?
            </p>
          </div>
        </div>
        <div className="flex bg-m3-surface-variant/50 dark:bg-slate-900/50 p-1.5 rounded-2xl border border-m3-surface-variant dark:border-slate-800 shadow-sm overflow-x-auto max-w-full">
          {subject.courses.map((course) => (
            <button
              key={course.id}
              onClick={() => onSelectCourse(course)}
              className={`px-6 py-2.5 rounded-xl text-sm font-display font-bold transition-all whitespace-nowrap ${
                currentCourse.id === course.id
                  ? 'bg-m3-primary text-m3-on-primary shadow-lg shadow-m3-primary/20'
                  : 'text-m3-on-surface-variant dark:text-slate-400 hover:bg-m3-surface-variant dark:hover:bg-slate-800'
              }`}
            >
              {course.id}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="m3-card p-8 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-m3-primary-container rounded-2xl text-m3-on-primary-container group-hover:rotate-12 transition-transform">
              <BookOpen className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-m3-on-surface-variant dark:text-slate-500 font-display font-bold uppercase tracking-wider">Quizzes Taken</p>
              <h3 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white">
                {loading ? '...' : stats.totalQuizzes}
              </h3>
            </div>
          </div>
        </div>

        <div className="m3-card p-8 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-m3-tertiary-container rounded-2xl text-m3-on-tertiary-container group-hover:rotate-12 transition-transform">
              <Activity className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-m3-on-surface-variant dark:text-slate-500 font-display font-bold uppercase tracking-wider">Average Score</p>
              <h3 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white">
                {loading ? '...' : `${stats.averageScore}%`}
              </h3>
            </div>
          </div>
        </div>

        <div className="m3-card p-8 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-6">
            <div className="p-4 bg-m3-secondary-container rounded-2xl text-m3-on-secondary-container group-hover:rotate-12 transition-transform">
              <Trophy className="w-8 h-8" />
            </div>
            <div>
              <p className="text-sm text-m3-on-surface-variant dark:text-slate-500 font-display font-bold uppercase tracking-wider">Last Exam Score</p>
              <h3 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white">
                {loading ? '...' : (stats.lastExamScore !== null ? `${stats.lastExamScore}%` : 'N/A')}
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Exam Mode Banner */}
      <div className="relative overflow-hidden bg-m3-primary dark:bg-indigo-950 rounded-[3rem] p-10 md:p-16 text-white shadow-2xl">
        <div className="absolute top-0 right-0 p-12 opacity-10 rotate-12">
          <Clock className="w-80 h-80" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-sm font-display font-bold mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"></span>
            Exam Mode
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">Ready for the real challenge?</h2>
          <p className="text-m3-primary-container text-xl mb-10 leading-relaxed font-display">
            Simulate a real exam environment. 
            <br />
            {subject.courses.map(course => (
              <React.Fragment key={course.id}>
                <span className="font-bold">{course.id}:</span> {course.questionCount} questions in {course.timeLimit} minutes.
                <br />
              </React.Fragment>
            ))}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 flex-wrap">
            {subject.courses.map((course) => (
              <button
                key={course.id}
                onClick={() => onStartExam(course)}
                className="px-8 py-5 bg-white text-m3-primary hover:bg-m3-primary-container rounded-2xl font-display font-bold text-xl transition-all shadow-xl shadow-black/10 flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95 group"
              >
                <Play className="w-6 h-6 fill-current group-hover:scale-110 transition-transform" />
                Start {course.id} Exam
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activity or Quick Links could go here */}
      <div className="flex items-center gap-3 text-m3-on-surface-variant dark:text-slate-500 text-sm font-display font-bold uppercase tracking-widest bg-m3-surface-variant/30 dark:bg-slate-900/30 p-4 rounded-2xl w-fit">
        <BarChart3 className="w-5 h-5" />
        <span>Select a course above to view specific topics below.</span>
      </div>
    </div>
  );
};
