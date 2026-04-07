import { Topic } from './questions';

export const bio111Topics: Topic[] = [
  {
    id: 'bio-111-cell',
    title: 'Cell Biology (BIO 111)',
    questions: [
      {
        id: 3001,
        text: "Which organelle is known as the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi Apparatus"],
        correctAnswer: 1,
        explanation: "Mitochondria generate most of the chemical energy needed to power the cell's biochemical reactions."
      },
      {
        id: 3002,
        text: "What is the basic unit of life?",
        options: ["Atom", "Molecule", "Cell", "Organ"],
        correctAnswer: 2,
        explanation: "The cell is the basic structural, functional, and biological unit of all known living organisms."
      },
      {
        id: 3003,
        text: "Which structure controls the movement of substances in and out of the cell?",
        options: ["Cell Wall", "Cytoplasm", "Cell Membrane", "Nucleus"],
        correctAnswer: 2,
        explanation: "The cell membrane is selectively permeable and controls the movement of substances in and out of the cell."
      },
      {
        id: 3004,
        text: "Where is DNA located in a eukaryotic cell?",
        options: ["Cytoplasm", "Ribosome", "Nucleus", "Endoplasmic Reticulum"],
        correctAnswer: 2,
        explanation: "In eukaryotic cells, DNA is located within the nucleus."
      },
      {
        id: 3005,
        text: "Which process do plants use to convert sunlight into energy?",
        options: ["Respiration", "Fermentation", "Photosynthesis", "Digestion"],
        correctAnswer: 2,
        explanation: "Photosynthesis is the process used by plants to convert light energy into chemical energy."
      }
    ]
  },
  {
    id: 'bio-111-genetics',
    title: 'Genetics (BIO 111)',
    questions: [
      {
        id: 3101,
        text: "Who is known as the father of genetics?",
        options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "James Watson"],
        correctAnswer: 1,
        explanation: "Gregor Mendel is known as the father of genetics for his work with pea plants."
      },
      {
        id: 3102,
        text: "What is the genetic material in most organisms?",
        options: ["RNA", "Protein", "DNA", "Lipid"],
        correctAnswer: 2,
        explanation: "DNA (Deoxyribonucleic acid) is the genetic material in most organisms."
      },
      {
        id: 3103,
        text: "What is a gene?",
        options: ["A protein", "A segment of DNA that codes for a protein", "A type of cell", "An organelle"],
        correctAnswer: 1,
        explanation: "A gene is a segment of DNA that contains the instructions for making a specific protein."
      },
      {
        id: 3104,
        text: "Which molecule carries genetic information from DNA to the ribosome?",
        options: ["tRNA", "rRNA", "mRNA", "DNA"],
        correctAnswer: 2,
        explanation: "mRNA (messenger RNA) carries genetic information from DNA to the ribosome for protein synthesis."
      },
      {
        id: 3105,
        text: "What is a mutation?",
        options: ["A change in DNA sequence", "Cell division", "Protein synthesis", "Energy production"],
        correctAnswer: 0,
        explanation: "A mutation is a change in the DNA sequence of an organism."
      }
    ]
  }
];

export const bio117Topics: Topic[] = [
  {
    id: 'bio-117-microscopy',
    title: 'Microscopy (BIO 117)',
    questions: [
      {
        id: 3501,
        text: "Which part of the microscope is used to hold the slide?",
        options: ["Stage", "Base", "Arm", "Eyepiece"],
        correctAnswer: 0,
        explanation: "The stage is the flat platform where you place your slides."
      },
      {
        id: 3502,
        text: "What is the total magnification if the eyepiece is 10x and the objective lens is 40x?",
        options: ["40x", "50x", "400x", "4000x"],
        correctAnswer: 2,
        explanation: "Total magnification is calculated by multiplying the eyepiece magnification by the objective lens magnification (10 * 40 = 400)."
      },
      {
        id: 3503,
        text: "Which knob is used for precise focusing?",
        options: ["Coarse adjustment knob", "Fine adjustment knob", "Stage control knob", "Light intensity knob"],
        correctAnswer: 1,
        explanation: "The fine adjustment knob is used for precise focusing, especially at high magnification."
      },
      {
        id: 3504,
        text: "What is the purpose of the diaphragm on a microscope?",
        options: ["To magnify the image", "To control the amount of light passing through the slide", "To hold the slide in place", "To move the stage"],
        correctAnswer: 1,
        explanation: "The diaphragm controls the amount of light passing through the specimen."
      },
      {
        id: 3505,
        text: "Which type of microscope uses electrons to create an image?",
        options: ["Light microscope", "Electron microscope", "Dissecting microscope", "Compound microscope"],
        correctAnswer: 1,
        explanation: "Electron microscopes use a beam of electrons to create an image with much higher resolution than light microscopes."
      }
    ]
  },
  {
    id: 'bio-117-lab-safety',
    title: 'Lab Safety (BIO 117)',
    questions: [
      {
        id: 3601,
        text: "What should you wear to protect your eyes in the lab?",
        options: ["Sunglasses", "Prescription glasses", "Safety goggles", "Contact lenses"],
        correctAnswer: 2,
        explanation: "Safety goggles are essential for protecting your eyes from chemical splashes and debris."
      },
      {
        id: 3602,
        text: "What is the first thing you should do if you spill a chemical on your skin?",
        options: ["Wipe it off with a towel", "Wash with plenty of water", "Apply lotion", "Ignore it"],
        correctAnswer: 1,
        explanation: "Immediately wash the affected area with plenty of water to dilute and remove the chemical."
      },
      {
        id: 3603,
        text: "Where should broken glass be disposed of?",
        options: ["Regular trash bin", "Recycling bin", "Broken glass container", "Sink"],
        correctAnswer: 2,
        explanation: "Broken glass should always be disposed of in a designated broken glass container to prevent injury."
      },
      {
        id: 3604,
        text: "Why is eating or drinking prohibited in the lab?",
        options: ["It distracts from work", "It can contaminate experiments", "It poses a risk of ingesting hazardous chemicals", "It is rude"],
        correctAnswer: 2,
        explanation: "Eating or drinking in the lab increases the risk of ingesting hazardous chemicals or biological agents."
      },
      {
        id: 3605,
        text: "What should you do with long hair in the lab?",
        options: ["Leave it down", "Tie it back", "Cut it off", "Wear a hat"],
        correctAnswer: 1,
        explanation: "Long hair should be tied back to prevent it from catching fire or getting into chemicals."
      }
    ]
  }
];
