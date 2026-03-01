import React, { useState, useEffect } from 'react';
import { topics as initialTopics, Topic, Question } from './data/questions';
import { QuizInterface } from './components/QuizInterface';
import { Results } from './components/Results';
import { AuthForm } from './components/AuthForm';
import { QuizHistory } from './components/QuizHistory';
import { Loading } from './components/Loading';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BookOpen, FlaskConical, Sun, Moon, LogOut, History, Sparkles, Loader2 } from 'lucide-react';
import { generateQuestions } from './services/aiService';

type AppState = 'home' | 'quiz' | 'results' | 'history';

function AppContent() {
  const [view, setView] = useState<AppState>('home');
  const [topics, setTopics] = useState<Topic[]>(initialTopics);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [quizResults, setQuizResults] = useState<{ answers: Record<number, number>; score: number; reviewOnly?: boolean } | null>(null);
  const [isQuizLoading, setIsQuizLoading] = useState(false);
  const [generatingTopicId, setGeneratingTopicId] = useState<string | null>(null);
  const { user, logout, loading } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  const startQuiz = (topic: Topic) => {
    setIsQuizLoading(true);
    // Catchy loading delay
    setTimeout(() => {
      setSelectedTopic(topic);
      setView('quiz');
      setIsQuizLoading(false);
    }, 2000);
  };

  const handleQuizComplete = (answers: Record<number, number>, score: number) => {
    setQuizResults({ answers, score, reviewOnly: false });
    setView('results');
  };

  const handleViewPastResult = (result: any) => {
    const topic = topics.find(t => t.id === result.topic_id);
    if (topic) {
      setSelectedTopic(topic);
      setQuizResults({ 
        answers: JSON.parse(result.answers), 
        score: result.score,
        reviewOnly: true
      });
      setView('results');
    }
  };

  const handleGenerateAIQuestions = async (e: React.MouseEvent, topicId: string, topicTitle: string) => {
    e.stopPropagation();
    setGeneratingTopicId(topicId);
    try {
      const newQuestions = await generateQuestions(topicTitle);
      setTopics(prev => prev.map(t => {
        if (t.id === topicId) {
          return {
            ...t,
            questions: [...t.questions, ...newQuestions]
          };
        }
        return t;
      }));
    } catch (error) {
      console.error("AI Generation failed:", error);
    } finally {
      setGeneratingTopicId(null);
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
            className="p-2 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 shadow-md transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
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
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors">
      {isQuizLoading && <Loading />}
      {/* Navbar */}
      <nav className="border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-50 transition-colors">
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
                      <button
                        onClick={(e) => handleGenerateAIQuestions(e, topic.id, topic.title)}
                        disabled={generatingTopicId === topic.id}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-bold rounded-lg hover:bg-amber-100 dark:hover:bg-amber-500/20 transition-colors disabled:opacity-50"
                        title="Generate 5 more questions with AI"
                      >
                        {generatingTopicId === topic.id ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Sparkles className="w-3.5 h-3.5" />
                        )}
                        {generatingTopicId === topic.id ? 'Generating...' : 'AI Add'}
                      </button>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                      Test your knowledge on {topic.title.toLowerCase()} with our comprehensive assessment.
                    </p>
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
