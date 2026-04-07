import { Topic, topics as chm111Topics } from './questions';
import { chm117Topics } from './chm117';
import { csTopics } from './cs';
import { bio111Topics, bio117Topics } from './biology';
import { phy111Topics, phy117Topics } from './physics';
import { gst111Topics } from './gst';
import { FlaskConical, Dna, Monitor, Atom, BookText } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  topics: Topic[];
  questionCount: number;
  timeLimit: number; // in minutes
}

export interface Subject {
  id: string;
  title: string;
  icon: any;
  description: string;
  courses: Course[];
  color: string; // Tailwind color class prefix (e.g., 'blue', 'emerald')
}

export const subjects: Subject[] = [
  {
    id: 'gst',
    title: 'General Studies',
    icon: BookText,
    description: 'Master communication in English, writing skills, and ethics.',
    color: 'rose',
    courses: [
      { 
        id: 'GST111', 
        title: 'Communication in English (GST 111)', 
        topics: gst111Topics,
        questionCount: 60,
        timeLimit: 40
      }
    ]
  },
  {
    id: 'chemistry',
    title: 'Chemistry',
    icon: FlaskConical,
    description: 'Master chemical reactions, stoichiometry, and lab procedures.',
    color: 'blue',
    courses: [
      { 
        id: 'CHM111', 
        title: 'General Chemistry (CHM 111)', 
        topics: chm111Topics,
        questionCount: 35,
        timeLimit: 30
      },
      { 
        id: 'CHM117', 
        title: 'Chemistry Lab (CHM 117)', 
        topics: chm117Topics,
        questionCount: 15,
        timeLimit: 10
      }
    ]
  },
  {
    id: 'biology',
    title: 'Biology',
    icon: Dna,
    description: 'Study life, cells, genetics, and ecosystems.',
    color: 'emerald',
    courses: [
      { 
        id: 'BIO111', 
        title: 'General Biology (BIO 111)', 
        topics: bio111Topics,
        questionCount: 35,
        timeLimit: 20
      },
      { 
        id: 'BIO117', 
        title: 'Biology Lab (BIO 117)', 
        topics: bio117Topics,
        questionCount: 25,
        timeLimit: 15
      }
    ]
  },
  {
    id: 'physics',
    title: 'Physics',
    icon: Atom,
    description: 'Explore mechanics, thermodynamics, and the laws of nature.',
    color: 'amber',
    courses: [
      { 
        id: 'PHY111', 
        title: 'General Physics (PHY 111)', 
        topics: phy111Topics,
        questionCount: 25,
        timeLimit: 20
      },
      { 
        id: 'PHY117', 
        title: 'Physics Lab (PHY 117)', 
        topics: phy117Topics,
        questionCount: 20,
        timeLimit: 15
      }
    ]
  },
  {
    id: 'cs',
    title: 'Computer Science',
    icon: Monitor,
    description: 'Learn programming, algorithms, and data structures.',
    color: 'indigo',
    courses: [
      { 
        id: 'COS111', 
        title: 'Intro to Computer Science (COS 111)', 
        topics: csTopics,
        questionCount: 35,
        timeLimit: 20
      }
    ]
  }
];

