import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Phone, Building, Save, History, Camera } from 'lucide-react';
import { db, OperationType, handleFirestoreError } from '../lib/firebase';
import { doc, updateDoc } from 'firebase/firestore';

interface ProfileProps {
  onViewHistory: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onViewHistory }) => {
  const { user, refreshUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: user?.user_metadata?.displayName || user?.name || '',
    email: user?.email || '',
    department: user?.user_metadata?.department || '',
    phone: user?.user_metadata?.phone || '',
    avatar_url: user?.user_metadata?.photoURL || user?.photoURL || '',
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.user_metadata?.displayName || user.name || '',
        email: user.email || '',
        department: user.user_metadata?.department || '',
        phone: user.user_metadata?.phone || '',
        avatar_url: user.user_metadata?.photoURL || user.photoURL || '',
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    setLoading(true);
    setMessage('');

    const path = `users/${user.id}`;
    try {
      const userDocRef = doc(db, 'users', user.id);
      await updateDoc(userDocRef, {
        displayName: formData.name,
        department: formData.department,
        phone: formData.phone,
      });
      
      await refreshUser(); // Refresh user data in context
      setMessage('Profile updated successfully!');
    } catch (error: any) {
      handleFirestoreError(error, OperationType.UPDATE, path);
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-700 font-sans">
      <div className="m3-card p-10 shadow-2xl">
        <div className="flex items-center gap-8 mb-10">
          <div className="relative">
            <div className="w-28 h-28 bg-m3-primary rounded-[2.5rem] flex items-center justify-center text-white text-4xl font-display font-bold shadow-xl overflow-hidden border-4 border-white dark:border-slate-800">
              {formData.avatar_url ? (
                <img 
                  src={formData.avatar_url} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000";
                  }}
                />
              ) : (
                (formData.name && typeof formData.name === 'string') ? formData.name.charAt(0).toUpperCase() : <User className="w-12 h-12" />
              )}
            </div>
            <div className="absolute -bottom-2 -right-2 p-2 bg-m3-secondary rounded-full border-4 border-white dark:border-slate-800 shadow-lg">
              <Camera className="w-5 h-5 text-m3-on-secondary" />
            </div>
          </div>
          <div>
            <h1 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white">{formData.name || 'User Profile'}</h1>
            <p className="text-m3-on-surface-variant dark:text-slate-400 font-display font-medium">{formData.email}</p>
          </div>
        </div>

        <form onSubmit={handleUpdateProfile} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 flex items-center gap-2 ml-1">
                <User className="w-4 h-4" /> Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 flex items-center gap-2 ml-1">
                <Building className="w-4 h-4" /> Department
              </label>
              <input
                type="text"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                placeholder="Chemistry"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 flex items-center gap-2 ml-1">
                <Phone className="w-4 h-4" /> Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white focus:border-m3-primary outline-none transition-all font-display"
                placeholder="+1 234 567 890"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-400 flex items-center gap-2 ml-1">
                <Mail className="w-4 h-4" /> Email
              </label>
              <input
                type="email"
                value={formData.email}
                disabled
                className="w-full p-4 rounded-2xl border-2 border-m3-surface-variant dark:border-slate-800 bg-m3-surface-variant/30 dark:bg-slate-800/30 text-m3-on-surface-variant dark:text-slate-500 cursor-not-allowed font-display"
              />
            </div>
          </div>

          {message && (
            <div className={`p-5 rounded-2xl text-sm font-display font-bold ${message.includes('Error') ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400 border border-red-100 dark:border-red-900/30' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30'}`}>
              {message}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-6 pt-6">
            <button
              type="submit"
              disabled={loading}
              className="m3-button-primary flex-1 py-4 flex items-center justify-center gap-3 shadow-lg shadow-m3-primary/20 disabled:opacity-50"
            >
              {loading ? 'Saving...' : <><Save className="w-5 h-5" /> Save Changes</>}
            </button>
            
            <button
              type="button"
              onClick={onViewHistory}
              className="m3-button-tonal flex-1 py-4 flex items-center justify-center gap-3"
            >
              <History className="w-5 h-5" /> View Quiz History
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
