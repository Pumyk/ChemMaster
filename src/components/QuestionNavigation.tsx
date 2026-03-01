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
    <div className="grid grid-cols-5 gap-2 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-white/5 transition-colors">
      {questions.map((q, index) => {
        const isAnswered = userAnswers[q.id] !== undefined;
        const isCurrent = index === currentQuestionIndex;
        
        let bgClass = "bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 border border-slate-200 dark:border-slate-600";
        if (isCurrent) bgClass = "bg-blue-600 text-white ring-2 ring-blue-400 border-blue-600";
        else if (isAnswered) bgClass = "bg-emerald-600 text-white border-emerald-600";

        return (
          <button
            key={q.id}
            onClick={() => onSelectQuestion(index)}
            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all duration-200 ${bgClass}`}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
