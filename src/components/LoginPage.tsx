import React from 'react';
import { AuthForm } from './AuthForm';
import { GraduationCap, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { Loading } from './Loading';

const Footer = () => (
  <footer className="py-8 text-center text-sm text-m3-on-surface-variant dark:text-slate-500 border-t border-m3-surface-variant dark:border-slate-800 mt-auto">
    <div className="flex justify-center gap-8 mb-6 font-display font-medium">
      <Link to="/privacy" className="hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors flex items-center gap-2">
        <Shield className="w-4 h-4" /> Privacy Policy
      </Link>
      <Link to="/terms" className="hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors flex items-center gap-2">
        <FileText className="w-4 h-4" /> Terms of Service
      </Link>
    </div>
    <p className="font-display">&copy; {new Date().getFullYear()} PrepMaster. All rights reserved.</p>
  </footer>
);

export const LoginPage = () => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-m3-surface dark:bg-slate-950 p-4 transition-colors font-sans overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-m3-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-m3-tertiary rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="absolute top-6 right-6">
        <button
          onClick={toggleTheme}
          className="p-3 rounded-full bg-white dark:bg-slate-900 text-m3-on-surface-variant dark:text-slate-300 shadow-xl transition-all hover:scale-110 active:scale-95"
          title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
        </button>
      </div>
      <div className="w-full max-w-md">
        <div className="mb-10 text-center cursor-pointer group" onClick={() => navigate('/')}>
          <div className="w-20 h-20 bg-m3-primary rounded-[2rem] flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-m3-primary/20 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-10 h-10 text-m3-on-primary" />
          </div>
          <h1 className="text-4xl font-display font-bold text-m3-on-surface dark:text-white">PrepMaster</h1>
          <p className="text-m3-on-surface-variant dark:text-slate-400 mt-3 font-display font-medium">Sign in to start your journey</p>
        </div>
        <AuthForm />
        <Footer />
      </div>
    </div>
  );
};
