import React, { useState, useEffect, useRef } from 'react';
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

  const submitQuiz = () => {
    let score = 0;
    shuffledQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    onComplete(answers, score);
  };

  const handleFinishClick = () => {
    setShowFinishConfirmation(true);
  };

  // Ref to access the latest submitQuiz in event listeners
  const submitQuizRef = useRef(submitQuiz);
  useEffect(() => {
    submitQuizRef.current = submitQuiz;
  });

  useEffect(() => {
    if (isStarting) return;

    const handleViolation = () => {
      setWarningCount(prev => {
        const newCount = prev + 1;
        if (newCount > 2) {
          submitQuizRef.current();
          return newCount;
        }
        setShowWarningModal(true);
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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900 text-white animate-in fade-in duration-300">
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold mb-4">Get Ready!</h2>
          <div className="text-9xl font-black tabular-nums animate-pulse text-blue-500">
            {countdown}
          </div>
          <p className="text-xl text-slate-400">Your exam will begin shortly...</p>
          
          <button
            onClick={() => setIsStarting(false)}
            className="px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 rounded-xl font-bold text-lg transition-all shadow-lg shadow-white/10 transform hover:scale-105 active:scale-95"
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
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6 relative">
      {/* Finish Confirmation Modal */}
      {showFinishConfirmation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-slate-200 dark:border-slate-700 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-500">
                <CheckCircle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Finish Quiz?</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Are you sure you want to submit your answers? You cannot undo this action.
                </p>
                <div className="mt-2 text-sm text-slate-500">
                  {Object.keys(answers).length} of {shuffledQuestions.length} questions answered.
                </div>
              </div>
              <div className="flex gap-3 w-full mt-2">
                <button
                  onClick={() => setShowFinishConfirmation(false)}
                  className="flex-1 py-3 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-xl font-bold transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={submitQuiz}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold transition-colors"
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
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-md w-full shadow-2xl border border-red-200 dark:border-red-900 animate-in fade-in zoom-in duration-200">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-600 dark:text-red-500">
                <AlertTriangle className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Warning!</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  You are attempting to leave the exam interface. This is a violation of the exam rules.
                </p>
                <p className="text-red-600 dark:text-red-400 font-bold mt-2">
                  Warning {warningCount} of 2
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Next violation will result in automatic submission.
                </p>
              </div>
              <button
                onClick={() => setShowWarningModal(false)}
                className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors cursor-pointer"
              >
                I Understand
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="w-full md:w-auto">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{topic.title}</h2>
            <button
              onClick={handleFinishClick}
              className="md:hidden px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-sm font-bold transition-colors shadow-md shadow-emerald-900/20 flex items-center gap-2"
            >
              <CheckCircle className="w-4 h-4" />
              Finish
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400 mb-2">
            <span>Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</span>
            <span className="md:hidden font-mono">{Math.floor(timeLeft / 60)}:{String(timeLeft % 60).padStart(2, '0')}</span>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 overflow-hidden">
            <div 
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-300 ease-out" 
              style={{ width: `${(Object.keys(answers).length / shuffledQuestions.length) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={submitQuiz} />
          <button
            onClick={handleFinishClick}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20 flex items-center gap-2"
          >
            <CheckCircle className="w-5 h-5" />
            Finish Quiz
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Question Area */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-xl min-h-[400px] flex flex-col transition-colors">
            <h3 className="text-xl md:text-2xl font-medium text-slate-900 dark:text-white mb-8 leading-relaxed">
              {currentQuestion.text}
            </h3>

            <div className="space-y-3 flex-1">
              {currentQuestion.options.map((option, index) => {
                const isSelected = answers[currentQuestion.id] === index;
                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-white' 
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-colors ${
                      isSelected 
                        ? 'border-blue-500 bg-blue-500 text-white' 
                        : 'border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-500 group-hover:border-slate-400 dark:group-hover:border-slate-500'
                    }`}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="text-lg">{option}</span>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                Previous
              </button>
              
              {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                <button
                  onClick={handleFinishClick}
                  className="px-6 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg flex items-center gap-2 transition-colors shadow-lg shadow-emerald-900/20"
                >
                  Finish
                  <CheckCircle className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => setCurrentQuestionIndex(prev => Math.min(shuffledQuestions.length - 1, prev + 1))}
                  className="px-6 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-xl transition-colors">
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Question Map
            </h4>
            <QuestionNavigation
              totalQuestions={shuffledQuestions.length}
              currentQuestionIndex={currentQuestionIndex}
              userAnswers={answers}
              onSelectQuestion={setCurrentQuestionIndex}
              questions={shuffledQuestions}
            />
            
            <div className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-blue-600 ring-2 ring-blue-400"></div>
                <span>Current Question</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-emerald-600"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-4 h-4 rounded bg-slate-200 dark:bg-slate-700"></div>
                <span>Unattempted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
