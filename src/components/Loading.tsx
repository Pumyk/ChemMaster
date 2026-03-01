import React from 'react';
import { motion } from 'motion/react';
import { Beaker } from 'lucide-react';

export const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 z-50 flex flex-col items-center justify-center p-6">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="w-32 h-32 rounded-full border-4 border-blue-500/20 dark:border-blue-400/10 flex items-center justify-center">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              rotate: { duration: 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
            }}
            className="text-blue-600 dark:text-blue-400"
          >
            <Beaker size={64} />
          </motion.div>
        </div>
        
        {/* Bubbles animation */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0, x: 0, opacity: 0 }}
            animate={{ 
              y: -100, 
              x: (i - 2) * 20,
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: i * 0.4,
              ease: "easeOut"
            }}
            className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 dark:bg-blue-500 rounded-full"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Mixing Chemicals...</h2>
        <p className="text-slate-600 dark:text-slate-400 animate-pulse">Preparing your university-level assessment</p>
      </motion.div>

      <div className="mt-12 w-64 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full bg-blue-600 dark:bg-blue-400"
        />
      </div>
    </div>
  );
};
