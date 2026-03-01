import React, { useState, useEffect } from 'react';
import { topics as initialTopics, Topic, Question } from './data/questions';
import { QuizInterface } from './components/QuizInterface';
import { Results } from './components/Results';
import { AuthForm } from './components/AuthForm';
import { QuizHistory } from './components/QuizHistory';
import { Loading } from './components/Loading';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BookOpen, FlaskConical, Sun, Moon, LogOut, History, Sparkles, Loader2, X } from 'lucide-react';
import { generateQuestions } from './services/aiService';

type AppState = 'home' | 'quiz' | 'results' | 'history';
type Difficulty = 'Easy' | 'Medium' | 'Hard';

function AppContent() {
  const [view, setView] = useState<AppState>('home');
  // Initialize topics with difficulty assigned (kept for AI generation context, but selector removed)
  const [topics, setTopics] = useState<Topic[]>(() => {
    return initialTopics.map(topic => ({
      ...topic,
      questions: topic.questions.map((q, index) => {
        if (q.difficulty) return q;
        // Logic: First 10 are Hard (indices 0-9), next 8 Medium, rest Easy
        let diff: Difficulty = 'Medium';
        if (index < 10) diff = 'Hard';
        else if (index < 18) diff = 'Medium';
        else diff = 'Easy';
        return { ...q, difficulty: diff };
      })
    }));
  });
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [quizResults, setQuizResults] = useState<{ answers: Record<number, number>; score: number; reviewOnly?: boolean } | null>(null);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [generatingTopicId, setGeneratingTopicId] = useState<string | null>(null);
  // Removed difficulty modal state
  const [aiDifficulty, setAiDifficulty] = useState<Difficulty>('Hard');
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiTargetTopic, setAiTargetTopic] = useState<Topic | null>(null);

  const { user, logout, loading } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const startQuiz = (topic: Topic) => {
    setSelectedTopic(topic);
    setIsQuizLoading(true);
    
    // Catchy loading delay
    setTimeout(() => {
      // Use all questions for the topic
      setSelectedTopic(topic);
      setView('quiz');
      setIsQuizLoading(false);
    }, 1500);
  };

  const handleQuizComplete = (answers: Record<number, number>, score: number) => {
    setQuizResults({ answers, score, reviewOnly: false });
    setView('results');
  };

  const handleViewPastResult = (result: any) => {
    const topic = topics.find(t => t.id === result.topic_id);
    if (topic) {
      const parsedAnswers = JSON.parse(result.answers);
      // Filter questions to only those that were answered (or attempted)
      const questionIds = Object.keys(parsedAnswers).map(Number);
      const filteredQuestions = topic.questions.filter(q => questionIds.includes(q.id));
      
      const questionsToUse = filteredQuestions.length > 0 ? filteredQuestions : topic.questions;

      const topicWithHistoryQuestions = {
        ...topic,
        questions: questionsToUse
      };

      setSelectedTopic(topicWithHistoryQuestions);
      setQuizResults({ 
        answers: parsedAnswers, 
        score: result.score,
        reviewOnly: true
      });
      setView('results');
    }
  };

  const openAiModal = (e: React.MouseEvent, topic: Topic) => {
    e.stopPropagation();
    setAiTargetTopic(topic);
    setShowAiModal(true);
  };

  const handleGenerateAIQuestions = async () => {
    if (!aiTargetTopic) return;
    
    const topicId = aiTargetTopic.id;
    const topicTitle = aiTargetTopic.title;
    
    setShowAiModal(false);
    setGeneratingTopicId(topicId);
    setIsQuizLoading(true); // Show loading state immediately
    
    try {
      // Generate 10 questions for a full quiz experience
      const newQuestions = await generateQuestions(topicTitle, 10, aiDifficulty);
      const questionsWithDifficulty = newQuestions.map(q => ({ ...q, difficulty: aiDifficulty }));
      
      // Create a temporary topic with ONLY the AI questions
      const aiQuizTopic: Topic = {
        ...aiTargetTopic,
        title: `${aiTargetTopic.title} (AI Generated - ${aiDifficulty})`,
        questions: questionsWithDifficulty
      };

      // Start the quiz with these questions
      setSelectedTopic(aiQuizTopic);
      setView('quiz');
      
      // Optionally add them to the main pool as well, or keep them separate?
      // User asked to use AI questions "instead of" database ones.
      // So we just start the quiz with them.
      
    } catch (error) {
      console.error("AI Generation failed:", error);
      alert("Failed to generate AI quiz. Please try again.");
    } finally {
      setGeneratingTopicId(null);
      setAiTargetTopic(null);
      setIsQuizLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 p-4 transition-colors">
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-md transition-colors hover:bg-slate-100 dark:hover:bg-slate-700"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
          </button>
        </div>
        <div className="mb-8 text-center">
          <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
            <FlaskConical className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">ChemMaster Pro</h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Sign in to start your journey</p>
        </div>
        <AuthForm />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors relative">
      {isQuizLoading && <Loading />}
      
      {/* AI Generation Modal */}
      {showAiModal && aiTargetTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-md w-full p-6 border border-slate-200 dark:border-slate-700">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Generate Questions</h3>
              <button onClick={() => setShowAiModal(false)} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full transition-colors">
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              Generate a unique 10-question quiz for <span className="font-semibold text-slate-900 dark:text-white">{aiTargetTopic.title}</span> using AI.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Select Difficulty</p>
              <div className="grid grid-cols-3 gap-2">
                {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setAiDifficulty(diff)}
                    className={`p-2 rounded-lg border text-sm font-medium transition-all ${
                      aiDifficulty === diff 
                        ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                        : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 text-slate-600 dark:text-slate-300'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
            
            <button
              onClick={handleGenerateAIQuestions}
              className="w-full py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-bold rounded-xl shadow-lg shadow-amber-600/20 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Generate Questions
            </button>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav className="border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-40 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('home')}>
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
              <FlaskConical className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
              ChemMaster Pro
            </span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button 
              onClick={() => setView('home')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${view === 'home' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              Quizzes
            </button>
            <button 
              onClick={() => setView('history')}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${view === 'history' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
            >
              <History className="w-4 h-4" />
              <span className="hidden sm:inline">History</span>
            </button>
            
            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1"></div>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <button 
              onClick={logout}
              className="p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-600 dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              title="Logout"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-8">
        {view === 'home' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Master University Chemistry
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Challenge yourself with our advanced interactive quizzes designed for first-year university students.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {topics.map((topic) => (
                <div 
                  key={topic.id}
                  onClick={() => startQuiz(topic)}
                  className="group relative bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 hover:border-blue-500/50 dark:hover:border-blue-500/50 transition-all cursor-pointer hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-blue-900/20 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity">
                    <BookOpen className="w-24 h-24 text-blue-600 dark:text-blue-400" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full">
                        {topic.questions.length} Questions
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                      Test your knowledge on {topic.title.toLowerCase()} with our comprehensive assessment.
                    </p>
                    
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          startQuiz(topic);
                        }}
                        className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors shadow-md shadow-blue-600/20"
                      >
                        Start Standard Quiz
                      </button>
                      <button
                        onClick={(e) => openAiModal(e, topic)}
                        className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-sm transition-colors shadow-md shadow-amber-500/20 flex items-center justify-center gap-1"
                      >
                        <Sparkles className="w-4 h-4" />
                        AI Quiz
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {view === 'quiz' && selectedTopic && (
          <QuizInterface 
            topic={selectedTopic} 
            onComplete={handleQuizComplete} 
          />
        )}

        {view === 'results' && selectedTopic && quizResults && (
          <Results 
            topic={selectedTopic}
            answers={quizResults.answers}
            score={quizResults.score}
            onRetry={() => startQuiz(selectedTopic)}
            onHome={() => setView('home')}
            reviewOnly={quizResults.reviewOnly}
          />
        )}

        {view === 'history' && (
          <div className="max-w-4xl mx-auto">
            <QuizHistory onViewResult={handleViewPastResult} />
          </div>
        )}
      </main>
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppContent />
      </ThemeProvider>
    </AuthProvider>
  );
}
