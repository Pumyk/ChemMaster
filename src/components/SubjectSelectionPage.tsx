import React from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { ArrowRight } from 'lucide-react';

export const SubjectSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
          What would you like to learn today?
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Select a subject to access quizzes, mock exams, and AI-powered study tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const colorClasses = {
            blue: 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800 hover:border-blue-400',
            purple: 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800 hover:border-purple-400',
            emerald: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 hover:border-emerald-400',
            indigo: 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800 hover:border-indigo-400',
            amber: 'bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800 hover:border-amber-400',
          }[subject.color] || 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700';

          return (
            <button
              key={subject.id}
              onClick={() => navigate(`/dashboard/${subject.id}`)}
              className={`group relative p-6 rounded-2xl border-2 text-left transition-all hover:shadow-xl hover:-translate-y-1 ${colorClasses.split(' ').slice(4).join(' ')} border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${colorClasses.split(' ').slice(0, 3).join(' ')}`}>
                <Icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {subject.title}
              </h3>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                {subject.description}
              </p>
              
              <div className="flex items-center text-sm font-medium text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <span>{subject.courses.length} Course{subject.courses.length !== 1 ? 's' : ''}</span>
                <ArrowRight className="w-4 h-4 ml-auto transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
