import { Topic } from './questions';

export const phy111Topics: Topic[] = [
  {
    id: 'phy-111-mechanics',
    title: 'Mechanics (PHY 111)',
    questions: [
      {
        id: 4001,
        text: "What is Newton's Second Law of Motion?",
        options: ["F = mv", "F = ma", "E = mc²", "P = IV"],
        correctAnswer: 1,
        explanation: "Newton's second law states that Force equals mass times acceleration (F = ma)."
      },
      {
        id: 4002,
        text: "What is the SI unit of force?",
        options: ["Joule", "Watt", "Newton", "Pascal"],
        correctAnswer: 2,
        explanation: "The SI unit of force is the Newton (N)."
      },
      {
        id: 4003,
        text: "Which of the following is a scalar quantity?",
        options: ["Velocity", "Acceleration", "Force", "Speed"],
        correctAnswer: 3,
        explanation: "Speed is a scalar quantity because it only has magnitude, whereas velocity, acceleration, and force are vectors (they have both magnitude and direction)."
      }
    ]
  },
  {
    id: 'phy-111-thermodynamics',
    title: 'Thermodynamics (PHY 111)',
    questions: [
      {
        id: 4101,
        text: "What does the zeroth law of thermodynamics define?",
        options: ["Conservation of energy", "Entropy", "Temperature", "Absolute zero"],
        correctAnswer: 2,
        explanation: "The zeroth law of thermodynamics establishes the concept of temperature and thermal equilibrium."
      }
    ]
  }
];

export const phy117Topics: Topic[] = [
  {
    id: 'phy-117-measurements',
    title: 'Measurements and Errors (PHY 117)',
    questions: [
      {
        id: 4501,
        text: "Which instrument is best used to measure the internal diameter of a test tube?",
        options: ["Meter rule", "Micrometer screw gauge", "Vernier caliper", "Measuring tape"],
        correctAnswer: 2,
        explanation: "A Vernier caliper has internal jaws specifically designed to measure internal diameters."
      },
      {
        id: 4502,
        text: "What is the SI unit of length?",
        options: ["Centimeter", "Kilometer", "Meter", "Millimeter"],
        correctAnswer: 2,
        explanation: "The meter (m) is the base unit of length in the International System of Units (SI)."
      }
    ]
  },
  {
    id: 'phy-117-optics',
    title: 'Optics Lab (PHY 117)',
    questions: [
      {
        id: 4601,
        text: "In an experiment to determine the focal length of a convex lens, what type of image is formed on the screen?",
        options: ["Virtual and erect", "Real and inverted", "Virtual and inverted", "Real and erect"],
        correctAnswer: 1,
        explanation: "A real image that can be projected onto a screen by a convex lens is always inverted."
      }
    ]
  }
];
