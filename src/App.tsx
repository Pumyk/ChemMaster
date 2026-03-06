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
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { BookOpen, FlaskConical, Sun, Moon, LogOut, History, Sparkles, X, LayoutDashboard, User, Shield, FileText, ArrowLeft } from 'lucide-react';
import { generateQuestions } from './services/aiService';

type Difficulty = 'Easy' | 'Medium' | 'Hard';

import { ProtectedRoute } from './components/ProtectedRoute';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MigrationTool } from './components/MigrationTool';

// --- Components for Pages ---







// --- Page Components ---

const DashboardPage = () => {
  const { subjectId } = useParams<{ subjectId: string }>();
  const navigate = useNavigate();
  
  const subject = subjects.find(s => s.id === subjectId);
  const [currentCourse, setCurrentCourse] = useState<Course | null>(null);
  
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiTargetTopic, setAiTargetTopic] = useState<Topic | null>(null);
  const [aiDifficulty, setAiDifficulty] = useState<Difficulty>('Hard');
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
    const questionCount = course.topics.length > 5 ? 35 : 15;
    const timeLimit = course.topics.length > 5 ? 30 * 60 : 10 * 60; // 30 mins or 10 mins
    
    const examQuestions = allQuestions.slice(0, questionCount);
    
    const examTopic: Topic = {
      id: `exam-${course.id}-${Date.now()}`,
      title: `Comprehensive Exam (${course.id})`,
      questions: examQuestions
    };
    
    navigate('/quiz', { state: { topic: examTopic, initialTime: timeLimit } });
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
      const newQuestions = await generateQuestions(aiTargetTopic.title, subject.title, 10, aiDifficulty);
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
      <button 
        onClick={() => navigate('/dashboard')}
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors mb-4"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Subjects
      </button>

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
        subject={subject}
        onStartExam={startExam} 
        onSelectCourse={setCurrentCourse} 
        currentCourse={currentCourse} 
      />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-blue-600" />
          {currentCourse.title} Topics
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
            <Route path="/admin/migrate" element={<ProtectedRoute><MigrationTool /></ProtectedRoute>} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}
