import { Topic } from './questions';

export const chm117Topics: Topic[] = [
  {
    id: "chm117-exp1",
    title: "Exp 1: Density of Liquids and Solids",
    questions: [
      {
        id: 1001,
        text: "In the determination of the density of an unknown metal, why is it important to slide the metal sample gently into the graduated cylinder?",
        options: [
          "To prevent the water from splashing out",
          "To avoid breaking the glass cylinder",
          "To ensure the metal dissolves properly",
          "To increase the volume of water displaced"
        ],
        correctAnswer: 1,
        explanation: "Sliding the metal gently prevents breakage of the glass cylinder, which could occur if a heavy metal object is dropped directly onto the bottom."
      },
      {
        id: 1002,
        text: "Which formula is used to calculate density?",
        options: [
          "Density = Mass × Volume",
          "Density = Volume / Mass",
          "Density = Mass / Volume",
          "Density = Mass + Volume"
        ],
        correctAnswer: 2,
        explanation: "Density is defined as mass per unit volume (D = m/V)."
      },
      {
        id: 1003,
        text: "When reading the volume of a liquid in a graduated cylinder, you should read the level at the:",
        options: [
          "Top of the meniscus",
          "Bottom of the meniscus",
          "Middle of the meniscus",
          "Edges of the meniscus"
        ],
        correctAnswer: 1,
        explanation: "For concave menisci (like water), the volume is read at the bottom of the curve at eye level."
      }
    ]
  },
  {
    id: "chm117-exp2",
    title: "Exp 2: Separating Components of a Binary Mixture",
    questions: [
      {
        id: 1004,
        text: "Which method is used to separate the supernatant liquid from the solid precipitate without disturbing the solid?",
        options: [
          "Filtration",
          "Decantation",
          "Evaporation",
          "Distillation"
        ],
        correctAnswer: 1,
        explanation: "Decantation involves carefully pouring off the liquid layer (supernatant) while leaving the solid sediment behind."
      },
      {
        id: 1005,
        text: "In the separation of NaCl and SiO₂ (sand), which substance is soluble in water?",
        options: [
          "SiO₂",
          "NaCl",
          "Both",
          "Neither"
        ],
        correctAnswer: 1,
        explanation: "Sodium chloride (NaCl) is soluble in water, whereas silicon dioxide (sand) is insoluble."
      },
      {
        id: 1006,
        text: "What is the purpose of heating the filtrate in an evaporating dish?",
        options: [
          "To melt the salt",
          "To react the salt with air",
          "To remove the solvent (water) and recover the solute",
          "To decompose the salt"
        ],
        correctAnswer: 2,
        explanation: "Evaporation removes the water, leaving the dissolved solid (NaCl) behind."
      }
    ]
  },
  {
    id: "chm117-exp3",
    title: "Exp 3: Titration of Acids and Bases",
    questions: [
      {
        id: 1007,
        text: "What is the point in a titration where the indicator changes color called?",
        options: [
          "Equivalence point",
          "End point",
          "Neutralization point",
          "Standardization point"
        ],
        correctAnswer: 1,
        explanation: "The end point is the experimental point where the indicator changes color, which estimates the equivalence point."
      },
      {
        id: 1008,
        text: "Which indicator is commonly used for strong acid-strong base titrations like HCl and NaOH?",
        options: [
          "Methyl Orange",
          "Phenolphthalein",
          "Litmus",
          "Starch"
        ],
        correctAnswer: 1,
        explanation: "Phenolphthalein is widely used as it changes from colorless (acidic) to pink (basic) around pH 8.2-10."
      },
      {
        id: 1009,
        text: "What is a 'standard solution'?",
        options: [
          "A solution of unknown concentration",
          "A solution with a known exact concentration",
          "A solution that changes color",
          "A solution used to clean burettes"
        ],
        correctAnswer: 1,
        explanation: "A standard solution is one whose concentration is accurately known."
      }
    ]
  },
  {
    id: "chm117-exp4",
    title: "Exp 4: Gravimetric Determination of a Formula",
    questions: [
      {
        id: 1010,
        text: "What is a hydrate?",
        options: [
          "A compound that has lost water",
          "A compound with water molecules chemically bound in its crystal structure",
          "A liquid solution",
          "A gas dissolved in water"
        ],
        correctAnswer: 1,
        explanation: "A hydrate is a solid compound that contains water molecules combined in a definite ratio as an integral part of the crystal."
      },
      {
        id: 1011,
        text: "Why is the crucible heated to constant mass?",
        options: [
          "To ensure it is hot",
          "To ensure all moisture/impurities are removed",
          "To melt the crucible",
          "To change its color"
        ],
        correctAnswer: 1,
        explanation: "Heating to constant mass ensures that all volatile impurities or moisture are driven off so the mass measurement is accurate."
      },
      {
        id: 1012,
        text: "If a hydrate is CuSO₄·5H₂O, what happens when it is heated strongly?",
        options: [
          "It melts",
          "It turns blue",
          "It loses water to become anhydrous CuSO₄",
          "It sublimes"
        ],
        correctAnswer: 2,
        explanation: "Heating drives off the water of hydration, leaving behind the anhydrous salt (often changing color from blue to white)."
      }
    ]
  },
  {
    id: "chm117-exp5",
    title: "Exp 5: Double Replacement Reactions",
    questions: [
      {
        id: 1013,
        text: "Which of the following is evidence of a double replacement reaction?",
        options: [
          "Formation of a precipitate",
          "Change in color",
          "Evolution of gas",
          "All of the above"
        ],
        correctAnswer: 3,
        explanation: "Double replacement reactions often result in a precipitate, gas evolution, or formation of a molecular species like water."
      },
      {
        id: 1014,
        text: "What is the precipitate formed when AgNO₃ reacts with NaCl?",
        options: [
          "NaNO₃",
          "AgCl",
          "AgNa",
          "ClNO₃"
        ],
        correctAnswer: 1,
        explanation: "AgNO₃ + NaCl → AgCl(s) + NaNO₃. Silver chloride (AgCl) is a white precipitate."
      },
      {
        id: 1015,
        text: "What are 'spectator ions'?",
        options: [
          "Ions that form a precipitate",
          "Ions that change oxidation state",
          "Ions that do not participate in the actual reaction",
          "Ions that are colored"
        ],
        correctAnswer: 2,
        explanation: "Spectator ions exist in the same form on both the reactant and product sides of the chemical equation."
      }
    ]
  },
  {
    id: "chm117-exp6",
    title: "Exp 6: Single Replacement Reactions",
    questions: [
      {
        id: 1016,
        text: "In the reaction Zn + 2HCl → ZnCl₂ + H₂, what is being oxidized?",
        options: [
          "H⁺",
          "Cl⁻",
          "Zn",
          "H₂"
        ],
        correctAnswer: 2,
        explanation: "Zinc (Zn) loses electrons to become Zn²⁺, so it is oxidized."
      },
      {
        id: 1017,
        text: "Which metal is more active: Copper or Zinc?",
        options: [
          "Copper",
          "Zinc",
          "They are equal",
          "Cannot be determined"
        ],
        correctAnswer: 1,
        explanation: "Zinc is more active than Copper; Zn will replace Cu from a solution of copper salts, but Cu will not replace Zn."
      },
      {
        id: 1018,
        text: "What gas is evolved when an active metal reacts with an acid?",
        options: [
          "Oxygen",
          "Chlorine",
          "Hydrogen",
          "Nitrogen"
        ],
        correctAnswer: 2,
        explanation: "Active metals react with acids to displace hydrogen gas (H₂)."
      }
    ]
  },
  {
    id: "chm117-exp7",
    title: "Exp 7: Visible Atomic Spectrum of Hydrogen",
    questions: [
      {
        id: 1019,
        text: "What instrument is used to separate light into its component wavelengths?",
        options: [
          "Microscope",
          "Spectroscope",
          "Telescope",
          "Barometer"
        ],
        correctAnswer: 1,
        explanation: "A spectroscope (or spectrometer) uses a prism or diffraction grating to disperse light into its spectrum."
      },
      {
        id: 1020,
        text: "The visible lines in the hydrogen spectrum are known as the:",
        options: [
          "Lyman series",
          "Balmer series",
          "Paschen series",
          "Brackett series"
        ],
        correctAnswer: 1,
        explanation: "The Balmer series corresponds to electron transitions ending at the n=2 energy level, which falls in the visible region."
      },
      {
        id: 1021,
        text: "As the value of n increases in the Bohr model, the energy levels:",
        options: [
          "Get closer together",
          "Get further apart",
          "Stay the same distance",
          "Disappear"
        ],
        correctAnswer: 0,
        explanation: "Energy levels converge (get closer together) as n increases towards infinity."
      }
    ]
  },
  {
    id: "chm117-exp8",
    title: "Exp 8: Lewis Symbols and Structures",
    questions: [
      {
        id: 1022,
        text: "How many valence electrons does Carbon have?",
        options: [
          "2",
          "4",
          "6",
          "8"
        ],
        correctAnswer: 1,
        explanation: "Carbon is in Group 14, so it has 4 valence electrons."
      },
      {
        id: 1023,
        text: "Which rule states that atoms tend to gain, lose, or share electrons to achieve 8 valence electrons?",
        options: [
          "Duet Rule",
          "Octet Rule",
          "Hund's Rule",
          "Aufbau Principle"
        ],
        correctAnswer: 1,
        explanation: "The Octet Rule states that atoms are most stable when they have a full valence shell of 8 electrons."
      },
      {
        id: 1024,
        text: "In the Lewis structure of CO₂, how many double bonds are there?",
        options: [
          "0",
          "1",
          "2",
          "3"
        ],
        correctAnswer: 2,
        explanation: "CO₂ has the structure O=C=O, containing two double bonds."
      }
    ]
  },
  {
    id: "chm117-exp9",
    title: "Exp 9: Molecular Geometries (VSEPR)",
    questions: [
      {
        id: 1025,
        text: "According to VSEPR theory, what is the shape of a molecule with 4 bonding pairs and 0 lone pairs?",
        options: [
          "Linear",
          "Trigonal Planar",
          "Tetrahedral",
          "Bent"
        ],
        correctAnswer: 2,
        explanation: "Four electron domains with no lone pairs result in a tetrahedral geometry (e.g., CH₄)."
      },
      {
        id: 1026,
        text: "What is the bond angle in a perfect tetrahedral molecule?",
        options: [
          "90°",
          "109.5°",
          "120°",
          "180°"
        ],
        correctAnswer: 1,
        explanation: "The ideal bond angle for a tetrahedral geometry is 109.5°."
      },
      {
        id: 1027,
        text: "Which molecule has a trigonal pyramidal shape?",
        options: [
          "CH₄",
          "NH₃",
          "H₂O",
          "BF₃"
        ],
        correctAnswer: 1,
        explanation: "NH₃ has 3 bonding pairs and 1 lone pair, creating a trigonal pyramidal shape."
      }
    ]
  }
];
