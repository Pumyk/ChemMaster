import React, { useState, useEffect } from 'react';
import { Question, Topic } from '../data/questions';
import { Timer } from './Timer';
import { QuestionNavigation } from './QuestionNavigation';
import { ArrowRight, ArrowLeft, CheckCircle } from 'lucide-react';

interface QuizInterfaceProps {
  topic: Topic;
  onComplete: (answers: Record<number, number>, score: number) => void;
}

export const QuizInterface: React.FC<QuizInterfaceProps> = ({ topic, onComplete }) => {
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); // 15 minutes in seconds

  useEffect(() => {
    // Shuffle questions on mount
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, [topic]);

  if (shuffledQuestions.length === 0) return null;

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswer = (optionIndex: number) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: optionIndex
    }));
  };

  const handleFinish = () => {
    let score = 0;
    shuffledQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });
    onComplete(answers, score);
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{topic.title}</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">Question {currentQuestionIndex + 1} of {shuffledQuestions.length}</p>
        </div>
        <div className="flex items-center gap-4">
          <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} onTimeUp={handleFinish} />
          <button
            onClick={handleFinish}
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
              
              <button
                onClick={() => setCurrentQuestionIndex(prev => Math.min(shuffledQuestions.length - 1, prev + 1))}
                disabled={currentQuestionIndex === shuffledQuestions.length - 1}
                className="px-6 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-900 dark:text-white rounded-lg disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </button>
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
