import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Zap } from 'lucide-react';

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-m3-surface dark:bg-slate-950 z-50 flex flex-col items-center justify-center p-6 font-sans overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-m3-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-m3-tertiary rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-40 h-40 rounded-[3rem] bg-white dark:bg-slate-900 shadow-2xl flex items-center justify-center relative overflow-hidden border border-m3-surface-variant dark:border-slate-800">
          <motion.div
            animate={{ 
              rotate: [0, -10, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-m3-primary dark:text-m3-primary-container z-10"
          >
            <GraduationCap size={80} />
          </motion.div>
          
          {/* Animated background inside the icon box */}
          <motion.div 
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-m3-primary-container/20"
          />
        </div>
        
        {/* Zap animation */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{ 
              y: -120, 
              x: (i - 2.5) * 30,
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: 360
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeOut"
            }}
            className="absolute top-0 left-1/2 text-m3-tertiary"
          >
            <Zap size={20} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-12 text-center"
      >
        <h2 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-3">Preparing Your Success</h2>
        <p className="text-m3-on-surface-variant dark:text-slate-400 font-display font-medium animate-pulse">Loading your study materials...</p>
      </motion.div>

      <div className="mt-16 w-72 h-2 bg-m3-surface-variant dark:bg-slate-800 rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-m3-primary dark:bg-m3-primary-container shadow-[0_0_15px_rgba(var(--m3-primary),0.5)]"
        />
      </div>
    </div>
  );
};
