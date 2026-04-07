import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Lightbulb, History, ArrowRight, Sun, Moon, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

export const LandingPage = () => {
  const navigate = useNavigate();
  const { isDark, toggleTheme } = useTheme();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-m3-surface dark:bg-slate-950 transition-colors flex flex-col font-sans">
      {/* Header */}
      <header className="bg-m3-surface/80 dark:bg-slate-950/50 backdrop-blur-md sticky top-0 z-40 border-b border-m3-surface-variant dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div 
            className="flex items-center gap-3 cursor-pointer group" 
            onClick={() => navigate('/')}
          >
            <div className="w-10 h-10 bg-m3-primary rounded-2xl flex items-center justify-center shadow-lg shadow-m3-primary/20 group-hover:scale-110 transition-transform">
              <GraduationCap className="w-6 h-6 text-m3-on-primary" />
            </div>
            <span className="text-2xl font-display font-bold text-m3-primary dark:text-m3-primary-container">
              PrepMaster
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-3 rounded-full hover:bg-m3-surface-variant dark:hover:bg-slate-800 text-m3-on-surface-variant dark:text-slate-300 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
            <button
              onClick={() => navigate('/login')}
              className="m3-button-tonal px-6 py-2.5 text-sm"
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-m3-primary rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-m3-tertiary rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-m3-primary-container text-m3-on-primary-container text-sm font-display font-semibold mb-10 shadow-sm">
              <Zap className="w-4 h-4" />
              <span>Master University Chemistry</span>
            </div>
            <h1 className="text-5xl sm:text-7xl font-display font-bold text-m3-on-surface dark:text-white tracking-tight mb-8 leading-[1.1]">
              Your Ultimate <span className="text-m3-primary dark:text-m3-primary-container">Chemistry Companion</span>
            </h1>
            <p className="text-xl text-m3-on-surface-variant dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ace your CHM111 and CHM117 exams with our comprehensive quiz platform. Practice with thousands of questions, track your progress, and generate custom practice quizzes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button
                onClick={() => navigate('/login')}
                className="m3-button-primary w-full sm:w-auto px-10 py-5 text-lg flex items-center justify-center gap-3 group"
              >
                Get Started Now 
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <FeatureCard 
                icon={<BookOpen className="w-10 h-10 text-m3-primary" />}
                title="Comprehensive Topics"
                description="Access a vast library of questions covering all major topics in CHM111 and CHM117."
              />
              <FeatureCard 
                icon={<Lightbulb className="w-10 h-10 text-m3-tertiary" />}
                title="Smart Practice Quizzes"
                description="Generate unique, custom quizzes tailored to your specific needs using our advanced question engine."
              />
              <FeatureCard 
                icon={<History className="w-10 h-10 text-m3-secondary" />}
                title="Progress Tracking"
                description="Monitor your performance over time with detailed history and analytics."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-m3-surface dark:bg-slate-950 border-t border-m3-surface-variant dark:border-slate-800 text-center">
         <p className="text-m3-on-surface-variant dark:text-slate-500 text-sm font-display font-medium">
          &copy; {new Date().getFullYear()} PrepMaster. All rights reserved.
        </p>
        <div className="flex justify-center gap-8 mt-6 text-sm font-display">
           <Link to="/privacy" className="text-m3-on-surface-variant dark:text-slate-500 hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="text-m3-on-surface-variant dark:text-slate-500 hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors">Terms of Service</Link>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-10 bg-m3-surface dark:bg-slate-900 rounded-[2.5rem] border border-m3-surface-variant dark:border-slate-800 hover:border-m3-primary/50 transition-all hover:shadow-xl group">
    <div className="mb-6 group-hover:scale-110 transition-transform">{icon}</div>
    <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-4">{title}</h3>
    <p className="text-m3-on-surface-variant dark:text-slate-400 leading-relaxed">{description}</p>
  </div>
);
