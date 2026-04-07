import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Question, Topic } from '../data/questions';
import { Timer } from './Timer';
import { QuestionNavigation } from './QuestionNavigation';
import { ArrowRight, ArrowLeft, CheckCircle, AlertTriangle } from 'lucide-react';

interface QuizInterfaceProps {
  topic: Topic;
  onComplete: (answers: Record<number, number>, score: number) => void;
  initialTime?: number;
}

export const QuizInterface: React.FC<QuizInterfaceProps> = ({ topic, onComplete, initialTime = 25 * 60 }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [warningCount, setWarningCount] = useState(0);
  const [showWarningModal, setShowWarningModal] = useState(false);
  const [isStarting, setIsStarting] = useState(true);
  const [countdown, setCountdown] = useState(5);
  const [showFinishConfirmation, setShowFinishConfirmation] = useState(false);

  useEffect(() => {
    // Shuffle questions on mount
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [topic]);

  useEffect(() => {
    if (!isStarting) return;

    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setIsStarting(false);
    }
  }, [countdown, isStarting]);

  const submitQuiz = useCallback(() => {
    let score = 0;
    shuffledQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    onComplete(answers, score);
  }, [shuffledQuestions, answers, onComplete]);

  const handleFinishClick = () => {
    setShowFinishConfirmation(true);
  };

  // Effect to handle automatic submission on too many warnings
  const hasSubmittedRef = useRef(false);
  useEffect(() => {
    if (warningCount > 2 && !hasSubmittedRef.current) {
      hasSubmittedRef.current = true;
      submitQuiz();
    }
  }, [warningCount, submitQuiz]);

  // Ref to access the latest submitQuiz in event listeners
  const submitQuizRef = useRef(submitQuiz);
  useEffect(() => {
    submitQuizRef.current = submitQuiz;
  }, [submitQuiz]);

  useEffect(() => {
    if (isStarting) return;

    const handleViolation = () => {
      setWarningCount(prev => {
        const newCount = prev + 1;
        if (newCount <= 2) {
          setShowWarningModal(true);
        }
        return newCount;
      });
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        handleViolation();
      }
    };

    const onBlur = () => {
      handleViolation();
    };

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('blur', onBlur);

    return () => {
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('blur', onBlur);
    };
  }, [isStarting]);

  if (shuffledQuestions.length === 0) return null;

  if (isStarting) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-white animate-in fade-in duration-500 font-sans">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 dark:opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-m3-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-m3-tertiary rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="text-center space-y-12">
          <h2 className="text-5xl font-display font-bold mb-4 tracking-tight">Get Ready!</h2>
          <div className="text-[12rem] font-display font-black tabular-nums text-m3-primary dark:text-m3-primary-container drop-shadow-2xl animate-bounce">
            {countdown}
          </div>
          <p className="text-2xl text-m3-on-surface-variant dark:text-slate-400 font-display font-medium">Your exam will begin shortly...</p>
          
          <button
            onClick={() => setIsStarting(false)}
            className="m3-button-primary px-12 py-5 text-2xl shadow-2xl shadow-m3-primary/30"
          >
            Start Now
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-8 relative font-sans">
      {/* Finish Confirmation Modal */}
      {showFinishConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-m3-surface dark:bg-slate-900 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl border border-m3-surface-variant dark:border-slate-800 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-[2rem] bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-500">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-3">Finish Quiz?</h3>
                <p className="text-m3-on-surface-variant dark:text-slate-400 leading-relaxed">
                  Are you sure you want to submit your answers? You cannot undo this action.
                </p>
                <div className="mt-4 text-sm font-display font-bold text-m3-primary dark:text-m3-primary-container bg-m3-primary-container/30 dark:bg-slate-800/50 px-4 py-2 rounded-full">
                  {Object.keys(answers).length} of {shuffledQuestions.length} questions answered.
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
                <button
                  onClick={() => setShowFinishConfirmation(false)}
                  className="m3-button-tonal flex-1 py-4"
                >
                  Cancel
                </button>
                <button
                  onClick={submitQuiz}
                  className="m3-button-primary flex-1 py-4 bg-emerald-600 text-white hover:bg-emerald-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Warning Modal */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-m3-surface dark:bg-slate-900 rounded-[2.5rem] p-10 max-w-md w-full shadow-2xl border border-red-200 dark:border-red-900 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="w-20 h-20 rounded-[2rem] bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500">
                <AlertTriangle className="w-10 h-10" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-3">Warning!</h3>
                <p className="text-m3-on-surface-variant dark:text-slate-400 leading-relaxed">
                  You are attempting to leave the exam interface. This is a violation of the exam rules.
                </p>
                <p className="text-red-600 dark:text-red-400 font-display font-black text-xl mt-4">
                  Warning {warningCount} of 2
                </p>
                <p className="text-xs text-m3-on-surface-variant dark:text-slate-500 mt-2 font-display font-bold uppercase tracking-widest">
                  Next violation will result in automatic submission.
                </p>
              </div>
              <button
                onClick={() => setShowWarningModal(false)}
                className="m3-button-primary w-full py-4 bg-red-600 text-white hover:bg-red-700"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        <div className="w-full md:w-auto">
          <div className="flex justify-between items-center gap-4">
            <h2 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-1">{topic.title}</h2>
            <button
              onClick={handleFinishClick}
              className="md:hidden px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-sm font-display font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Finish
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-m3-on-surface-variant dark:text-slate-400 mb-3 font-display font-bold uppercase tracking-widest">
            <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
            <span className="md:hidden font-mono bg-m3-surface-variant/50 dark:bg-slate-800/50 px-3 py-1 rounded-lg">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
          </div>
          <div className="w-full bg-m3-surface-variant dark:bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner">
            <div 
              className="bg-m3-primary h-full rounded-full transition-all duration-500 ease-out shadow-lg" 
              style={{ width: `${(Object.keys(answers).length / shuffledQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={submitQuiz} />
          <button
            onClick={handleFinishClick}
            className="m3-button-primary py-4 bg-emerald-600 text-white hover:bg-emerald-700 flex items-center gap-3 shadow-emerald-900/20"
          >
            <CheckCircle className="w-6 h-6" />
            Finish Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Main Question Area */}
        <div className="lg:col-span-8 space-y-8">
          <div className="m3-card p-10 min-h-[450px] flex flex-col transition-colors shadow-xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-10 leading-tight">
              {currentQuestion.text}
            </h3>

            <div className="space-y-4 flex-1">
              {currentQuestion.options.map((option, index) => {
                const isSelected = answers[currentQuestion.id] === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 flex items-center gap-6 group ${
                      isSelected 
                        ? 'border-m3-primary bg-m3-primary-container text-m3-on-primary-container shadow-md' 
                        : 'border-m3-surface-variant dark:border-slate-800 bg-m3-surface dark:bg-slate-950 text-m3-on-surface dark:text-slate-300 hover:border-m3-primary/30 hover:bg-m3-surface-variant/30 dark:hover:bg-slate-800/30'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-lg font-display font-black transition-colors ${
                      isSelected 
                        ? 'border-m3-primary bg-m3-primary text-white' 
                        : 'border-m3-surface-variant dark:border-slate-700 text-m3-on-surface-variant dark:text-slate-500 group-hover:border-m3-primary/50'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-xl font-display font-medium">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between mt-10 pt-8 border-t border-m3-surface-variant dark:border-slate-800">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-8 py-3 text-m3-on-surface-variant dark:text-slate-400 hover:text-m3-primary dark:hover:text-m3-primary-container disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3 transition-all font-display font-bold"
              >
                <ArrowLeft className="w-6 h-6" />
                Previous
              </button>
              
              {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                <button
                  onClick={handleFinishClick}
                  className="px-10 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full font-display font-bold text-lg flex items-center gap-3 transition-all shadow-xl shadow-emerald-900/20 transform hover:scale-105 active:scale-95"
                >
                  Finish
                  <CheckCircle className="w-6 h-6" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(shuffledQuestions.length - 1, prev + 1))}
                  className="px-10 py-3 bg-m3-primary-container text-m3-on-primary-container hover:bg-m3-primary hover:text-m3-on-primary rounded-full font-display font-bold text-lg disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-3 transition-all shadow-md transform hover:scale-105 active:scale-95"
                >
                  Next
                  <ArrowRight className="w-6 h-6" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-8">
          <div className="m3-card p-8 transition-colors shadow-lg">
            <h4 className="text-m3-on-surface dark:text-white font-display font-bold text-xl mb-6 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-m3-primary animate-pulse"></div>
              Question Map
            </h4>
            <QuestionNavigation
              totalQuestions={shuffledQuestions.length}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={answers}
              onSelectQuestion={setCurrentQuestionIndex}
              questions={shuffledQuestions}
            />
            
            <div className="mt-8 space-y-3 text-sm font-display font-bold text-m3-on-surface-variant dark:text-slate-500 uppercase tracking-widest">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg bg-m3-primary ring-4 ring-m3-primary-container"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg bg-emerald-600"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 rounded-lg bg-m3-surface-variant dark:bg-slate-800"></div>
                <span>Unattempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
