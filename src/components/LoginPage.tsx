import React from 'react';
import { AuthForm } from './AuthForm';
import { FlaskConical, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

const Footer = () => (
  <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-auto">
    <div className="flex justify-center gap-6 mb-4">
      <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <Shield className="w-3 h-3" /> Privacy Policy
      </Link>
      <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <FileText className="w-3 h-3" /> Terms of Service
      </Link>
    </div>
    <p>&copy; {new Date().getFullYear()} ChemMaster Pro. All rights reserved.</p>
  </footer>
);

export const LoginPage = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4 transition-colors">
      <div className="absolute top-4 right-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
            <FlaskConical className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">ChemMaster Pro</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Sign in to start your journey</p>
        </div>
        <AuthForm />
        <Footer />
      </div>
    </div>
  );
};
