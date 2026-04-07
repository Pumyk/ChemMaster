import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation, Link, NavLink, useParams } from 'react-router-dom';
import { topics as chm111Topics, Topic } from './data/questions';
import { chm117Topics } from './data/chm117';
import { subjects, Subject, Course } from './data/subjects';
import { QuizInterface } from './components/QuizInterface';
import { Results } from './components/Results';
import { QuizHistory } from './components/QuizHistory';
import { Loading } from './components/Loading';
import { Dashboard } from './components/Dashboard';
import { SubjectSelectionPage } from './components/SubjectSelectionPage';
import { Profile } from './components/Profile';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { LandingPage } from './components/LandingPage';
import { LoginPage } from './components/LoginPage';
import { AdminPage } from './components/AdminPage';
import { generateQuestions } from './services/questionService';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BookOpen, GraduationCap, Sun, Moon, LogOut, History, Zap, X, LayoutDashboard, User, Shield, FileText, ArrowLeft, Menu } from 'lucide-react';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

// --- Components for Pages ---

const Footer = () => (
  <footer className="py-12 text-center text-sm text-m3-on-surface-variant dark:text-slate-500 border-t border-m3-surface-variant dark:border-slate-800 mt-auto bg-m3-surface dark:bg-slate-950">
    <div className="flex justify-center gap-8 mb-6 font-display font-medium">
      <Link to="/privacy" className="hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors flex items-center gap-2">
        <Shield className="w-4 h-4" /> Privacy Policy
      </Link>
      <Link to="/terms" className="hover:text-m3-primary dark:hover:text-m3-primary-container transition-colors flex items-center gap-2">
        <FileText className="w-4 h-4" /> Terms of Service
      </Link>
    </div>
    <p className="font-display">&copy; {new Date().getFullYear()} PrepMaster. All rights reserved.</p>
  </footer>
);

const Navbar = () => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="bg-m3-surface/80 dark:bg-slate-950/50 backdrop-blur-md sticky top-0 z-40 transition-colors border-b border-m3-surface-variant dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
          <div className="w-10 h-10 bg-m3-primary rounded-2xl flex items-center justify-center shadow-lg shadow-m3-primary/20 group-hover:scale-110 transition-transform shrink-0">
            <GraduationCap className="w-6 h-6 text-m3-on-primary" />
          </div>
          <span className="text-2xl font-display font-bold text-m3-primary dark:text-m3-primary-container truncate">
            PrepMaster
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink 
            to="/dashboard"
            className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all flex items-center gap-2 ${isActive ? 'bg-m3-primary-container text-m3-on-primary-container shadow-sm' : 'text-m3-on-surface-variant dark:text-slate-400 hover:bg-m3-surface-variant dark:hover:bg-slate-800'}`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Dashboard</span>
          </NavLink>
          <NavLink 
            to="/history"
            className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all flex items-center gap-2 ${isActive ? 'bg-m3-primary-container text-m3-on-primary-container shadow-sm' : 'text-m3-on-surface-variant dark:text-slate-400 hover:bg-m3-surface-variant dark:hover:bg-slate-800'}`}
          >
            <History className="w-4 h-4" />
            <span>History</span>
          </NavLink>
          <NavLink 
            to="/profile"
            className={({ isActive }) => `px-5 py-2.5 rounded-full text-sm font-display font-semibold transition-all flex items-center gap-2 ${isActive ? 'bg-m3-primary-container text-m3-on-primary-container shadow-sm' : 'text-m3-on-surface-variant dark:text-slate-400 hover:bg-m3-surface-variant dark:hover:bg-slate-800'}`}
          >
            <img 
              src={user?.user_metadata?.avatar_url || "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"} 
              alt="Profile" 
              className="w-6 h-6 rounded-full object-cover border border-m3-surface-variant dark:border-slate-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000";
              }}
            />
            <span>Profile</span>
          </NavLink>
          
          <div className="h-8 w-px bg-m3-surface-variant dark:bg-slate-800 mx-2"></div>

          <button
            onClick={toggleTheme}
            className="p-3 rounded-full hover:bg-m3-surface-variant dark:hover:bg-slate-800 text-m3-on-surface-variant dark:text-slate-300 transition-colors"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <button 
            onClick={logout}
            className="p-3 rounded-full hover:bg-red-50 dark:hover:bg-red-900/20 text-m3-on-surface-variant dark:text-slate-300 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2 shadow-lg absolute w-full left-0">
          <NavLink 
            to="/dashboard"
            onClick={closeMenu}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <LayoutDashboard className="w-5 h-5" />
            Dashboard
          </NavLink>
          <NavLink 
            to="/history"
            onClick={closeMenu}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <History className="w-5 h-5" />
            History
          </NavLink>
          <NavLink 
            to="/profile"
            onClick={closeMenu}
            className={({ isActive }) => `block px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center gap-3 ${isActive ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'}`}
          >
            <img 
              src={user?.user_metadata?.avatar_url || "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000"} 
              alt="Profile" 
              className="w-6 h-6 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "https://img.icons8.com/?size=100&id=2yC9SZKcXDdX&format=png&color=000000";
              }}
            />
            Profile
          </NavLink>
          <div className="h-px bg-slate-200 dark:bg-slate-800 my-2"></div>
          <button 
            onClick={() => { logout(); closeMenu(); }}
            className="w-full text-left px-4 py-3 rounded-xl text-base font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center gap-3"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  if (loading) return <Loading />;
  
  if (!user) {
    return <Navigate to="/login" replace />;
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
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  
  const [showCustomQuizModal, setShowCustomQuizModal] = useState(false);
  const [customQuizTargetTopic, setCustomQuizTargetTopic] = useState<Topic | null>(null);
  const [customQuizDifficulty, setCustomQuizDifficulty] = useState<Difficulty>('Hard');
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    if (subject && subject.courses.length > 0) {
      setCurrentCourse(subject.courses[0]);
    }
  }, [subject]);

  if (!subject) return <Navigate to="/dashboard" />;
  if (!currentCourse) return <Loading />;

  const displayedTopics = currentCourse.topics;

  const startExam = (course: Course) => {
    // 1. Collect ALL questions
    const allQuestions = course.topics.flatMap(t => t.questions);
    
    // 2. Shuffle
    for (let i = allQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
    }
    
    // 3. Configure Exam Settings
    const questionCount = course.questionCount;
    const timeLimit = course.timeLimit * 60; // convert to seconds
    
    const examQuestions = allQuestions.slice(0, questionCount);
    
    const examTopic: Topic = {
      id: `exam-${course.id}-${Date.now()}`,
      title: `Comprehensive Exam (${course.id})`,
      questions: examQuestions
    };
    
    navigate('/quiz', { state: { topic: examTopic, initialTime: timeLimit } });
  };

  const openCustomQuizModal = (e: React.MouseEvent, topic: Topic) => {
    e.stopPropagation();
    setCustomQuizTargetTopic(topic);
    setShowCustomQuizModal(true);
  };

  const handleGenerateCustomQuestions = async () => {
    if (!customQuizTargetTopic) return;
    setIsGenerating(true);
    try {
      const newQuestions = await generateQuestions(customQuizTargetTopic.title, subject.title, 10, customQuizDifficulty);
      const questionsWithDifficulty = newQuestions.map(q => ({ ...q, difficulty: customQuizDifficulty }));
      
      const customQuizTopic: Topic = {
        ...customQuizTargetTopic,
        title: `${customQuizTargetTopic.title} (Custom - ${customQuizDifficulty})`,
        questions: questionsWithDifficulty
      };

      navigate('/quiz', { state: { topic: customQuizTopic } });
    } catch (error) {
      console.error("Question generation failed:", error);
      alert("Failed to generate custom quiz. Please try again.");
    } finally {
      setIsGenerating(false);
      setShowCustomQuizModal(false);
    }
  };

  const handleStartQuiz = (e: React.MouseEvent | null, topic: Topic) => {
    if (e) e.stopPropagation();
    
    let quizTopic = topic;
    let initialTime = undefined;

    // Use course-specific settings if available
    if (currentCourse) {
      // Shuffle and take UP TO the course's question count from THIS topic only
      const shuffledQuestions = [...topic.questions].sort(() => Math.random() - 0.5);
      const selectedQuestions = shuffledQuestions.slice(0, currentCourse.questionCount);
      
      quizTopic = {
        ...topic,
        questions: selectedQuestions
      };
      
      initialTime = currentCourse.timeLimit * 60; // convert to seconds
    }

    navigate('/quiz', { state: { topic: quizTopic, initialTime } });
  };

  return (
    <div className="space-y-12">
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Subjects
      </button>

      {isGenerating && <Loading />}
      
      {/* Custom Quiz Modal */}
      {showCustomQuizModal && customQuizTargetTopic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-m3-surface dark:bg-slate-900 rounded-[2.5rem] shadow-2xl max-w-md w-full p-8 border border-m3-surface-variant dark:border-slate-800">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white">Generate Questions</h3>
              <button onClick={() => setShowCustomQuizModal(false)} className="p-2 hover:bg-m3-surface-variant dark:hover:bg-slate-800 rounded-full transition-colors">
                <X className="w-6 h-6 text-m3-on-surface-variant" />
              </button>
            </div>
            <p className="text-m3-on-surface-variant dark:text-slate-400 mb-8 leading-relaxed">
              Generate a unique 10-question quiz for <span className="font-bold text-m3-primary dark:text-m3-primary-container">{customQuizTargetTopic.title}</span> using our smart engine.
            </p>
            <div className="space-y-4 mb-10">
              <p className="text-xs font-display font-bold text-m3-on-surface-variant dark:text-slate-500 uppercase tracking-widest">Select Difficulty</p>
              <div className="grid grid-cols-3 gap-3">
                {(['Easy', 'Medium', 'Hard'] as Difficulty[]).map((diff) => (
                  <button
                    key={diff}
                    onClick={() => setCustomQuizDifficulty(diff)}
                    className={`py-3 rounded-2xl border-2 font-display font-bold transition-all ${
                      customQuizDifficulty === diff 
                        ? 'border-m3-primary bg-m3-primary-container text-m3-on-primary-container' 
                        : 'border-m3-surface-variant dark:border-slate-800 hover:border-m3-primary/30 text-m3-on-surface-variant dark:text-slate-400'
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>
            <button
              onClick={handleGenerateCustomQuestions}
              className="m3-button-primary w-full py-4 flex items-center justify-center gap-3 shadow-lg shadow-m3-primary/20"
            >
              <Zap className="w-5 h-5" />
              Generate Questions
            </button>
          </div>
        </div>
      )}

      <Dashboard 
        subject={subject}
        onStartExam={startExam} 
        onSelectCourse={setCurrentCourse} 
        currentCourse={currentCourse} 
      />

      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-3xl font-display font-bold text-m3-on-surface dark:text-white mb-8 flex items-center gap-3">
          <div className="p-2 bg-m3-primary-container rounded-xl">
            <BookOpen className="w-7 h-7 text-m3-on-primary-container" />
          </div>
          {currentCourse.title} Topics
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedTopics.map((topic) => (
            <div 
              key={topic.id}
              onClick={() => handleStartQuiz(null, topic)}
              className="group relative bg-white dark:bg-slate-900 rounded-[2rem] p-8 border border-m3-surface-variant dark:border-slate-800 hover:border-m3-primary/50 transition-all cursor-pointer hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 p-4 opacity-[0.03] dark:opacity-[0.05] group-hover:opacity-[0.08] transition-opacity">
                <BookOpen className="w-32 h-32 text-m3-primary" />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="inline-block px-4 py-1.5 bg-m3-secondary-container text-m3-on-secondary-container text-xs font-display font-bold rounded-full">
                    {topic.questions.length} Questions
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold text-m3-on-surface dark:text-white mb-3 group-hover:text-m3-primary dark:group-hover:text-m3-primary-container transition-colors line-clamp-2">
                  {topic.title}
                </h3>
                <p className="text-m3-on-surface-variant dark:text-slate-400 text-sm mb-8 line-clamp-2 leading-relaxed">
                  Practice questions for {topic.title}.
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={(e) => handleStartQuiz(e, topic)}
                    className="m3-button-primary flex-1 py-3 text-sm"
                  >
                    Start Quiz
                  </button>
                  <button
                    onClick={(e) => openCustomQuizModal(e, topic)}
                    className="flex-1 py-2 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg text-sm transition-colors shadow-md shadow-amber-500/20 flex items-center justify-center gap-1"
                  >
                    <Zap className="w-4 h-4" />
                    Smart Quiz
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
  const initialTime = location.state?.initialTime as number | undefined;

  if (!topic) return <Navigate to="/dashboard" />;

  return (
    <QuizInterface 
      key={topic.id}
      topic={topic} 
      initialTime={initialTime}
      onComplete={(answers, score) => navigate('/results', { state: { topic, answers, score } })} 
    />
  );
};

const ResultsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { topic, answers, score, reviewOnly, totalQuestions } = location.state || {};

  if (!topic || !answers) return <Navigate to="/dashboard" />;

  return (
    <Results 
      topic={topic}
      answers={answers}
      score={score}
      totalQuestions={totalQuestions}
      onRetry={() => navigate('/quiz', { state: { topic } })}
      onHome={() => navigate('/dashboard')}
      reviewOnly={reviewOnly}
    />
  );
};

const HistoryPage = () => {
  const navigate = useNavigate();
  // Collect all topics from all subjects
  const allTopics = subjects.flatMap(s => s.courses.flatMap(c => c.topics));

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
          totalQuestions: result.total,
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<ProtectedRoute><SubjectSelectionPage /></ProtectedRoute>} />
            <Route path="/dashboard/:subjectId" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path="/history" element={<ProtectedRoute><HistoryPage /></ProtectedRoute>} />
            <Route path="/quiz" element={<ProtectedRoute><QuizPage /></ProtectedRoute>} />
            <Route path="/results" element={<ProtectedRoute><ResultsPage /></ProtectedRoute>} />
            <Route path="/admin004" element={<ProtectedRoute><AdminPage /></ProtectedRoute>} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
