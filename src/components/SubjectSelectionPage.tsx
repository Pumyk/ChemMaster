import React from 'react';
import { useNavigate } from 'react-router-dom';
import { subjects } from '../data/subjects';
import { ArrowRight } from 'lucide-react';

export const SubjectSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 animate-in fade-in duration-700 font-sans">
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-display font-bold text-m3-on-surface dark:text-white mb-6 tracking-tight">
          What would you like to learn today?
        </h1>
        <p className="text-xl text-m3-on-surface-variant dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Select a subject to access quizzes, mock exams, and AI-powered study tools.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {subjects.map((subject) => {
          const Icon = subject.icon;
          const colorClasses = {
            blue: {
              container: 'bg-m3-primary-container text-m3-on-primary-container',
              hover: 'hover:border-m3-primary/50',
              icon: 'bg-m3-primary text-m3-on-primary'
            },
            purple: {
              container: 'bg-m3-tertiary-container text-m3-on-tertiary-container',
              hover: 'hover:border-m3-tertiary/50',
              icon: 'bg-m3-tertiary text-m3-on-tertiary'
            },
            emerald: {
              container: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-900 dark:text-emerald-100',
              hover: 'hover:border-emerald-500/50',
              icon: 'bg-emerald-600 text-white'
            },
            indigo: {
              container: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-900 dark:text-indigo-100',
              hover: 'hover:border-indigo-500/50',
              icon: 'bg-indigo-600 text-white'
            },
            amber: {
              container: 'bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-100',
              hover: 'hover:border-amber-500/50',
              icon: 'bg-amber-600 text-white'
            },
          }[subject.color as keyof typeof colorClasses] || {
            container: 'bg-m3-surface-variant text-m3-on-surface-variant',
            hover: 'hover:border-m3-primary/30',
            icon: 'bg-m3-primary text-m3-on-primary'
          };

          return (
            <button
              key={subject.id}
              onClick={() => navigate(`/dashboard/${subject.id}`)}
              className={`group relative p-8 rounded-[2.5rem] border-2 text-left transition-all hover:shadow-2xl hover:-translate-y-1 bg-white dark:bg-slate-900 border-m3-surface-variant dark:border-slate-800 ${colorClasses.hover}`}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform ${colorClasses.icon}`}>
                <Icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-3 group-hover:text-m3-primary dark:group-hover:text-m3-primary-container transition-colors">
                {subject.title}
              </h3>
              
              <p className="text-m3-on-surface-variant dark:text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                {subject.description}
              </p>
              
              <div className="flex items-center text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-500 group-hover:text-m3-on-surface dark:group-hover:text-white transition-colors bg-m3-surface-variant/30 dark:bg-slate-800/30 px-4 py-2 rounded-full w-fit">
                <span>{subject.courses.length} Course{subject.courses.length !== 1 ? 's' : ''}</span>
                <ArrowRight className="w-4 h-4 ml-3 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};
