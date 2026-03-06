import { Topic, topics as chm111Topics } from './questions';
import { chm117Topics } from './chm117';
import { csTopics } from './cs';
import { FlaskConical, Atom, Dna, Monitor, BookOpen, Calculator } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  icon: any;
  description: string;
  courses: Course[];
  color: string; // Tailwind color class prefix (e.g., 'blue', 'emerald')
}

// Placeholder topics for new subjects
const physicsTopics: Topic[] = [
  {
    id: 'phys-101-kinematics',
    title: 'Kinematics',
    questions: [
      {
        id: 2001,
        text: "A car accelerates from rest at 2 m/s². How far does it travel in 5 seconds?",
        options: ["10 m", "25 m", "50 m", "5 m"],
        correctAnswer: 1,
        explanation: "d = 1/2 * a * t² = 0.5 * 2 * 5² = 25 m."
      },
      {
        id: 2002,
        text: "Which of the following is a vector quantity?",
        options: ["Speed", "Distance", "Velocity", "Mass"],
        correctAnswer: 2,
        explanation: "Velocity has both magnitude and direction, making it a vector."
      }
    ]
  },
  {
    id: 'phys-101-forces',
    title: 'Newton\'s Laws',
    questions: [
      {
        id: 2003,
        text: "If a net force of 10 N acts on a 2 kg mass, what is its acceleration?",
        options: ["5 m/s²", "20 m/s²", "0.2 m/s²", "10 m/s²"],
        correctAnswer: 0,
        explanation: "F = ma => a = F/m = 10/2 = 5 m/s²."
      }
    ]
  }
];

const biologyTopics: Topic[] = [
  {
    id: 'bio-101-cell',
    title: 'Cell Biology',
    questions: [
      {
        id: 3001,
        text: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correctAnswer: 1,
        explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
      }
    ]
  }
];

const englishTopics: Topic[] = [
  {
    id: 'eng-101-grammar',
    title: 'Grammar & Usage',
    questions: [
      {
        id: 5001,
        text: "Identify the verb in the sentence: 'The cat sleeps on the mat.'",
        options: ["The", "Cat", "Sleeps", "Mat"],
        correctAnswer: 2,
        explanation: "'Sleeps' is the action word in the sentence."
      }
    ]
  }
];

export const subjects: Subject[] = [
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: FlaskConical,
    description: 'Master chemical reactions, stoichiometry, and lab procedures.',
    color: 'blue',
    courses: [
      { id: 'CHM111', title: 'General Chemistry (CHM 111)', topics: chm111Topics },
      { id: 'CHM117', title: 'Chemistry Lab (CHM 117)', topics: chm117Topics }
    ]
  },
  {
    id: 'physics',
    title: 'Physics',
    icon: Atom,
    description: 'Explore mechanics, thermodynamics, and electromagnetism.',
    color: 'purple',
    courses: [
      { id: 'PHY101', title: 'General Physics', topics: physicsTopics }
    ]
  },
  {
    id: 'biology',
    title: 'Biology',
    icon: Dna,
    description: 'Study life, cells, genetics, and ecosystems.',
    color: 'emerald',
    courses: [
      { id: 'BIO101', title: 'General Biology', topics: biologyTopics }
    ]
  },
  {
    id: 'cs',
    title: 'Computer Science',
    icon: Monitor,
    description: 'Learn programming, algorithms, and data structures.',
    color: 'indigo',
    courses: [
      { id: 'COS111', title: 'Intro to Computer Science (COS 111)', topics: csTopics }
    ]
  },
  {
    id: 'english',
    title: 'English',
    icon: BookOpen,
    description: 'Improve grammar, literature analysis, and writing skills.',
    color: 'amber',
    courses: [
      { id: 'ENG101', title: 'English Composition', topics: englishTopics }
    ]
  }
];

