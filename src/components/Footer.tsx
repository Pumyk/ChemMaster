import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, FileText } from 'lucide-react';

export const Footer = () => (
  <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-auto">
    <div className="flex justify-center gap-6 mb-4">
      <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <Shield className="w-3 h-3" /> Privacy Policy
      </Link>
      <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <FileText className="w-3 h-3" /> Terms of Service
      </Link>
    </div>
    <p>&copy; {new Date().getFullYear()} PrepMaster. All rights reserved.</p>
  </footer>
);
