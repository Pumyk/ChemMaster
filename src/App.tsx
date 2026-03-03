import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation, Link, NavLink } from 'react-router-dom';
import { topics as chm111Topics, Topic } from './data/questions';
import { chm117Topics } from './data/chm117';
import { QuizInterface } from './components/QuizInterface';
import { Results } from './components/Results';
import { AuthForm } from './components/AuthForm';
import { QuizHistory } from './components/QuizHistory';
import { Loading } from './components/Loading';
import { Dashboard } from './components/Dashboard';
import { Profile } from './components/Profile';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BookOpen, FlaskConical, Sun, Moon, LogOut, History, Sparkles, X, LayoutDashboard, User, Shield, FileText } from 'lucide-react';
import { generateQuestions } from './services/aiService';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

// --- Components for Pages ---

const Footer = () => (
  <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 mt-auto">
    <div className="flex justify-center gap-6 mb-4">
      <Link to="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <Shield className="w-3 h-3" /> Privacy Policy
      </Link>
      <Link to="/terms" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1">
        <FileText className="w-3 h-3" /> Terms of Service
      </Link>
    </div>
    <p>&copy; {new Date().getFullYear()} ChemMaster Pro. All rights reserved.</p>
  </footer>
);

const Navbar = () => {
  const { logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <nav className="border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/50 backdrop-blur-md sticky top-0 z-40 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md shadow-blue-600/20">
            <FlaskConical className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
            ChemMaster Pro
          </span>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <NavLink 
            to="/"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span className="hidden sm:inline">Dashboard</span>
          </NavLink>
          <NavLink 
            to="/history"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <History className="w-4 h-4" />
            <span className="hidden sm:inline">History</span>
          </NavLink>
          <NavLink 
            to="/profile"
            className={({ isActive }) => `px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Profile</span>
          </NavLink>
          
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
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  if (loading) return <Loading />;
  
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
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-600/20">
              <FlaskConical className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">ChemMaster Pro</h1>
            <p className="text-slate-500 dark:text-slate-400 mt-2">Sign in to start your journey</p>
          </div>
          <AuthForm />
          <Footer />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// --- Page Components ---

const DashboardPage = () => {
  const navigate = useNavigate();
  const [currentCourse, setCurrentCourse] = useState<'CHM111' | 'CHM117'>('CHM111');
  const allTopics = [...chm111Topics, ...chm117Topics];
  const displayedTopics = currentCourse === 'CHM111' ? chm111Topics : chm117Topics;
  
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiTargetTopic, setAiTargetTopic] = useState<Topic | null>(null);
  const [aiDifficulty, setAiDifficulty] = useState<Difficulty>('Hard');
  const [isGenerating, setIsGenerating] = useState(false);

  const startExam = () => {
    // 1. Collect ALL questions
    const allQuestions = allTopics.flatMap(t => t.questions);
    // 2. Shuffle
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    // 3. Select 25
    const examQuestions = allQuestions.slice(0, 25);
    
    const examTopic: Topic = {
      id: `exam-${Date.now()}`,
      title: "Comprehensive Exam (CHM 111 & 117)",
      questions: examQuestions
    };
    
    navigate('/quiz', { state: { topic: examTopic } });
  };

  const openAiModal = (e: React.MouseEvent, topic: Topic) => {
    e.stopPropagation();
    setAiTargetTopic(topic);
    setShowAiModal(true);
  };

  const handleGenerateAIQuestions = async () => {
    if (!aiTargetTopic) return;
    setIsGenerating(true);
    try {
      const newQuestions = await generateQuestions(aiTargetTopic.title, 10, aiDifficulty);
      const questionsWithDifficulty = newQuestions.map(q => ({ ...q, difficulty: aiDifficulty }));
      
      const aiQuizTopic: Topic = {
        ...aiTargetTopic,
        title: `${aiTargetTopic.title} (AI Generated - ${aiDifficulty})`,
        questions: questionsWithDifficulty
      };

      navigate('/quiz', { state: { topic: aiQuizTopic } });
    } catch (error) {
      console.error("AI Generation failed:", error);
      alert("Failed to generate AI quiz. Please try again.");
    } finally {
      setIsGenerating(false);
      setShowAiModal(false);
    }
  };

  return (
    <div className="space-y-12">
      {isGenerating && <Loading />}
      
      {/* AI Modal */}
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

      <Dashboard 
        onStartExam={startExam} 
        onSelectCourse={setCurrentCourse} 
        currentCourse={currentCourse} 
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          {currentCourse} Topics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedTopics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => navigate('/quiz', { state: { topic } })}
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {topic.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">
                  Practice questions for {topic.title}.
                </p>
                
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate('/quiz', { state: { topic } });
                    }}
                    className="flex-1 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-sm transition-colors shadow-md shadow-blue-600/20"
                  >
                    Start Quiz
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
    </div>
  );
};

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const topic = location.state?.topic as Topic;

  if (!topic) return <Navigate to="/" />;

  return (
    <QuizInterface 
      topic={topic} 
      onComplete={(answers, score) => navigate('/results', { state: { topic, answers, score } })} 
    />
  );
};

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { topic, answers, score, reviewOnly } = location.state || {};

  if (!topic || !answers) return <Navigate to="/" />;

  return (
    <Results 
      topic={topic}
      answers={answers}
      score={score}
      onRetry={() => navigate('/quiz', { state: { topic } })}
      onHome={() => navigate('/')}
      reviewOnly={reviewOnly}
    />
  );
};

const HistoryPage = () => {
  const navigate = useNavigate();
  const allTopics = [...chm111Topics, ...chm117Topics];

  const handleViewResult = (result: any) => {
    let topic = allTopics.find(t => t.id === result.topic_id);
    
    if (!topic) {
        topic = {
            id: result.topic_id,
            title: result.topic_title,
            questions: [] 
        };
    }

    if (topic) {
      const parsedAnswers = JSON.parse(result.answers);
      const standardTopic = allTopics.find(t => t.id === result.topic_id);
      if (standardTopic) {
          const questionIds = Object.keys(parsedAnswers).map(Number);
          const filteredQuestions = standardTopic.questions.filter(q => questionIds.includes(q.id));
          topic.questions = filteredQuestions.length > 0 ? filteredQuestions : standardTopic.questions;
      }

      navigate('/results', { 
        state: { 
          topic, 
          answers: parsedAnswers, 
          score: result.score, 
          reviewOnly: true 
        } 
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <QuizHistory onViewResult={handleViewResult} />
    </div>
  );
};

const ProfilePage = () => {
  const navigate = useNavigate();
  return <Profile onViewHistory={() => navigate('/history')} />;
};

// --- Main App Component ---

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
