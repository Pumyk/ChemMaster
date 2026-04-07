import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { GraduationCap, LayoutDashboard, History, Sun, Moon, LogOut } from 'lucide-react';

export const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
            PrepMaster
          </span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/history"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <History className="w-4 h-4" />
            <span className="hidden sm:inline">History</span>
          </NavLink>
          <NavLink 
            to="/profile"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <img 
              src={user?.user_metadata?.avatar_url || "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"} 
              alt="Profile" 
              className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000";
              }}
            />
            <span className="hidden sm:inline">Profile</span>
          </NavLink>
          
          <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            onClick={logout}
            className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};
