import React, { useEffect } from 'react';

interface TimerProps {
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
  onTimeUp: () => void;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  const playTickSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      // High pitch "tick"
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      
      // Short duration
      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error("Audio play failed", e);
    }
  };

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
    }
  }, [timeLeft <= 0, onTimeUp]);

  useEffect(() => {
    if (timeLeft <= 0) return;

    // Play sound if time is running out (last 60 seconds)
    if (timeLeft <= 60) {
      playTickSound();
    }

    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft, setTimeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`text-xl font-mono font-bold p-3 rounded-lg border transition-colors duration-300 ${timeLeft < 60 ? 'text-red-500 border-red-500 animate-pulse bg-red-50 dark:bg-red-900/20' : 'text-emerald-400 border-emerald-500/30'}`}>
      Time Left: {formatTime(timeLeft)}
    </div>
  );
};
