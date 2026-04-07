import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { auth, googleProvider } from '../lib/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from 'firebase/auth';
import { LogIn, UserPlus, Loader2, Eye, EyeOff, X } from 'lucide-react';

export const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  // Forgot Password State
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState('');
  const [resetError, setResetError] = useState('');

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        // Note: Firebase doesn't automatically set displayName on signup with email/pass
        // We'd need updateProfile, but AuthContext handles initial profile creation in Firestore
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setResetLoading(true);
    setResetMessage('');
    setResetError('');

    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setResetMessage('Check your email for the password reset link.');
    } catch (err: any) {
      setResetError(err.message);
    } finally {
      setResetLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      await login(); // AuthContext.login uses signInWithPopup
    } catch (err: any) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full max-w-md mx-auto p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-m3-surface-variant dark:border-slate-800 transition-colors">
        <h2 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-8 text-center">
          {isLogin ? 'Welcome Back' : 'Create Account'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="block text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 ml-1">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                required
              />
            </div>
          )}
          
          <div className="space-y-2">
            <label className="block text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 ml-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 ml-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-4 pr-12 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-m3-on-surface-variant dark:text-slate-500 hover:text-m3-primary dark:hover:text-m3-primary-container focus:outline-none transition-colors"
              >
                {showPassword ? (
                  <EyeOff className="w-6 h-6" />
                ) : (
                  <Eye className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-sm font-display font-bold text-m3-primary dark:text-m3-primary-container hover:underline"
              >
                Forgot Password?
              </button>
            </div>
          )}

          {error && (
            <p className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 font-display">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="m3-button-primary w-full py-4 flex items-center justify-center gap-3 shadow-lg shadow-m3-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isLogin ? (
              <>
                <LogIn className="w-6 h-6" />
                Log In
              </>
            ) : (
              <>
                <UserPlus className="w-6 h-6" />
                Sign Up
              </>
            )}
          </button>
        </form>

        <div className="mt-8 flex items-center gap-4">
          <div className="h-px bg-m3-surface-variant dark:bg-slate-800 flex-1"></div>
          <span className="text-xs text-m3-on-surface-variant dark:text-slate-500 font-display font-bold uppercase tracking-widest">Or continue with</span>
          <div className="h-px bg-m3-surface-variant dark:bg-slate-800 flex-1"></div>
        </div>

        <button
          type="button"
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="mt-6 w-full py-4 bg-m3-surface dark:bg-slate-950 hover:bg-m3-surface-variant dark:hover:bg-slate-800 text-m3-on-surface dark:text-white border-2 border-m3-surface-variant dark:border-slate-800 rounded-2xl font-display font-bold transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          <svg className="w-6 h-6" viewBox="0 0 24 24">
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              fill="#EA4335"
            />
          </svg>
          Sign in with Google
        </button>

        <div className="mt-8 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-500 hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in"}
          </button>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-m3-surface dark:bg-slate-900 rounded-[2.5rem] shadow-2xl max-w-md w-full p-10 border border-m3-surface-variant dark:border-slate-800 relative">
            <button
              onClick={() => setShowForgotPassword(false)}
              className="absolute top-6 right-6 p-2 hover:bg-m3-surface-variant dark:hover:bg-slate-800 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-m3-on-surface-variant" />
            </button>
            
            <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-4">Reset Password</h3>
            <p className="text-m3-on-surface-variant dark:text-slate-400 mb-8 leading-relaxed">
              Enter your email address and we'll send you a link to reset your password.
            </p>

            <form onSubmit={handleResetPassword} className="space-y-6">
              <div className="space-y-2">
                <label className="block text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 ml-1">Email</label>
                <input
                  type="email"
                  value={resetEmail}
                  onChange={(e) => setResetEmail(e.target.value)}
                  className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                  required
                />
              </div>

              {resetMessage && (
                <p className="text-emerald-600 dark:text-emerald-400 text-sm bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/30 font-display">
                  {resetMessage}
                </p>
              )}

              {resetError && (
                <p className="text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-4 rounded-2xl border border-red-100 dark:border-red-900/30 font-display">
                  {resetError}
                </p>
              )}

              <button
                type="submit"
                disabled={resetLoading}
                className="m3-button-primary w-full py-4 flex items-center justify-center gap-3 shadow-lg shadow-m3-primary/20 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {resetLoading ? (
                  <Loader2 className="w-6 h-6 animate-spin" />
                ) : (
                  'Send Reset Link'
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
