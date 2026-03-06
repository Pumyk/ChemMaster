import { Topic } from './questions';

export const csTopics: Topic[] = [
  {
    id: 'cs-101-basics',
    title: 'Computer Systems & Architecture',
    questions: [
      {
        id: 4001,
        text: "What does CPU stand for?",
        options: ["Central Processing Unit", "Computer Personal Unit", "Central Process Utility", "Central Processor Unit"],
        correctAnswer: 0,
        explanation: "CPU stands for Central Processing Unit, the primary component of a computer that acts as its 'control center'."
      },
      {
        id: 4002,
        text: "Which of the following is a volatile memory?",
        options: ["ROM", "Hard Disk", "RAM", "Flash Drive"],
        correctAnswer: 2,
        explanation: "RAM (Random Access Memory) is volatile, meaning it loses its data when power is turned off."
      },
      {
        id: 4003,
        text: "What is the binary representation of the decimal number 10?",
        options: ["1010", "1100", "1001", "1111"],
        correctAnswer: 0,
        explanation: "10 in decimal is 1010 in binary (8 + 2)."
      }
    ]
  },
  {
    id: 'cs-102-programming',
    title: 'Programming Fundamentals',
    questions: [
      {
        id: 4101,
        text: "In Python, which keyword is used to define a function?",
        options: ["func", "define", "def", "function"],
        correctAnswer: 2,
        explanation: "The 'def' keyword is used to start a function definition in Python."
      },
      {
        id: 4102,
        text: "What is the time complexity of searching for an element in a balanced Binary Search Tree (BST)?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        correctAnswer: 2,
        explanation: "In a balanced BST, each comparison eliminates half the remaining nodes, leading to logarithmic time complexity."
      },
      {
        id: 4103,
        text: "Which data structure follows the Last-In, First-Out (LIFO) principle?",
        options: ["Queue", "Stack", "Linked List", "Array"],
        correctAnswer: 1,
        explanation: "A Stack is a LIFO data structure where the last element added is the first one removed."
      }
    ]
  },
  {
    id: 'cs-103-networking',
    title: 'Computer Networks',
    questions: [
      {
        id: 4201,
        text: "What does HTTP stand for?",
        options: ["HyperText Transfer Protocol", "High Transfer Text Protocol", "Hyperlink Text Transfer Process", "HyperText Transmission Protocol"],
        correctAnswer: 0,
        explanation: "HTTP stands for HyperText Transfer Protocol, the foundation of data communication for the World Wide Web."
      },
      {
        id: 4202,
        text: "Which layer of the OSI model is responsible for routing packets?",
        options: ["Data Link Layer", "Transport Layer", "Network Layer", "Physical Layer"],
        correctAnswer: 2,
        explanation: "The Network Layer (Layer 3) is responsible for packet forwarding and routing."
      }
    ]
  },
  {
    id: 'cs-104-databases',
    title: 'Database Management Systems',
    questions: [
      {
        id: 4301,
        text: "What does SQL stand for?",
        options: ["Simple Query Language", "Structured Query Language", "Standard Query Language", "Sequential Query Language"],
        correctAnswer: 1,
        explanation: "SQL stands for Structured Query Language, used for managing relational databases."
      },
      {
        id: 4302,
        text: "Which SQL command is used to remove all records from a table without deleting the table structure?",
        options: ["DELETE", "DROP", "TRUNCATE", "REMOVE"],
        correctAnswer: 2,
        explanation: "TRUNCATE removes all rows from a table, but the table structure and its columns, constraints, indexes, and so on remain."
      }
    ]
  }
];
