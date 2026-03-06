import React from 'react';

interface QuestionNavigationProps {
  totalQuestions: number;
  currentQuestionIndex: number;
  userAnswers: Record<number, number>;
  onSelectQuestion: (index: number) => void;
  questions: { id: number }[];
}

export const QuestionNavigation: React.FC<QuestionNavigationProps> = ({
  totalQuestions,
  currentQuestionIndex,
  userAnswers,
  onSelectQuestion,
  questions
}) => {
  return (
    <div className="grid grid-cols-5 gap-3 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-white/5 transition-colors">
      {questions.map((q, index) => {
        const isAnswered = userAnswers[q.id] !== undefined;
        const isCurrent = index === currentQuestionIndex;
        
        return (
          <button
            key={q.id}
            onClick={() => onSelectQuestion(index)}
            className={`relative w-10 h-10 rounded-xl text-sm font-bold transition-all duration-200 flex items-center justify-center ${
              isCurrent 
                ? 'bg-blue-600 text-white ring-4 ring-blue-500/30 border-blue-600 scale-110 shadow-lg z-10' 
                : isAnswered 
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-sm hover:bg-emerald-600' 
                  : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-2 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-700/50'
            }`}
            aria-label={`Question ${index + 1}${isAnswered ? ', answered' : ', unanswered'}${isCurrent ? ', current' : ''}`}
            aria-current={isCurrent ? 'step' : undefined}
          >
            {index + 1}
            {!isAnswered && !isCurrent && (
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-amber-400 rounded-full shadow-sm"></span>
            )}
          </button>
        );
      })}
    </div>
  );
};
