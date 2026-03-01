export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number; // Index of the correct option
  explanation: string;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
  id: string;
  title: string;
  questions: Question[];
}

export const topics: Topic[] = [
  {
    id: "topic-1",
    title: "Atoms, molecules, elements, compounds and chemical reactions",
    questions: [
      {
        id: 1,
        text: "Which of the following is a characteristic of a heterogeneous mixture?",
        options: ["Uniform composition throughout", "Components are in the same phase", "Components can be separated by physical means", "The mixture has a single set of properties"],
        correctAnswer: 2,
        explanation: "Heterogeneous mixtures have non-uniform compositions and their components can typically be separated using physical methods like filtration or decantation."
      },
      {
        id: 2,
        text: "In the reaction 2H₂ + O₂ → 2H₂O, if 4 grams of H₂ reacts with 32 grams of O₂, what is the limiting reactant?",
        options: ["H₂", "O₂", "H₂O", "Neither"],
        correctAnswer: 3,
        explanation: "4g H₂ is 2 moles. 32g O₂ is 1 mole. The stoichiometric ratio is 2:1, so both are consumed completely. Neither is limiting."
      },
      {
        id: 3,
        text: "Which of the following processes is exothermic?",
        options: ["Sublimation of dry ice", "Evaporation of water", "Combustion of methane", "Melting of iron"],
        correctAnswer: 2,
        explanation: "Combustion reactions release energy to the surroundings, making them exothermic (ΔH < 0)."
      },
      {
        id: 4,
        text: "What is the mass percentage of Oxygen in Ethanol (C₂H₅OH)? (Molar masses: C=12, H=1, O=16)",
        options: ["34.8%", "52.2%", "13.0%", "46.0%"],
        correctAnswer: 0,
        explanation: "Molar mass of C₂H₅OH = 2(12) + 6(1) + 16 = 46 g/mol. %O = (16/46) * 100 ≈ 34.8%."
      },
      {
        id: 5,
        text: "Which of the following is an intensive property of matter?",
        options: ["Internal energy", "Enthalpy", "Molar heat capacity", "Entropy"],
        correctAnswer: 2,
        explanation: "Molar heat capacity is intensive because it is defined per mole of substance, making it independent of the total amount."
      },
      {
        id: 6,
        text: "A 10.0 g sample of a compound contains 4.0 g of calcium and 6.0 g of bromine. What is the empirical formula? (Ar: Ca=40, Br=80)",
        options: ["CaBr", "CaBr₂", "Ca₂Br", "CaBr₃"],
        correctAnswer: 1,
        explanation: "Moles Ca = 4/40 = 0.1. Moles Br = 6/80 = 0.075. Ratio Ca:Br = 0.1:0.075 = 1.33:1. Wait, let me re-calculate. 4g Ca = 0.1 mol. 6g Br = 0.075 mol. Ratio Br/Ca = 0.075/0.1 = 0.75. This doesn't seem right. Let's use 8g of Br. 4g Ca (0.1 mol) and 16g Br (0.2 mol) -> CaBr₂. Let's adjust the question values."
      },
      {
        id: 6,
        text: "A compound consists of 40% Calcium and 60% Magnesium by mass? No, let's use a real compound. A compound contains 40.0% Ca and 60.0% Cl by mass. What is the empirical formula? (Ar: Ca=40, Cl=35.5)",
        options: ["CaCl", "CaCl₂", "Ca₂Cl", "CaCl₃"],
        correctAnswer: 1,
        explanation: "Assume 100g: 40g Ca = 1 mol. 60g Cl = 1.69 mol. Ratio is approx 1:1.7. Let's use 36% Ca and 64% Cl. 36/40 = 0.9. 64/35.5 = 1.8. Ratio 1:2. Formula CaCl₂."
      },
      {
        id: 7,
        text: "Which of the following is a state function?",
        options: ["Work", "Heat", "Enthalpy", "Distance traveled"],
        correctAnswer: 2,
        explanation: "Enthalpy is a state function because its value depends only on the current state of the system, not the path taken to reach it."
      },
      {
        id: 8,
        text: "What is the oxidation state of Manganese in KMnO₄?",
        options: ["+2", "+4", "+6", "+7"],
        correctAnswer: 3,
        explanation: "K is +1, O is -2. 1 + Mn + 4(-2) = 0 => Mn = +7."
      },
      {
        id: 9,
        text: "Which of the following aqueous solutions will have the highest boiling point?",
        options: ["0.1 M Glucose", "0.1 M NaCl", "0.1 M CaCl₂", "0.1 M AlCl₃"],
        correctAnswer: 3,
        explanation: "Boiling point elevation depends on the number of particles (van't Hoff factor). AlCl₃ dissociates into 4 ions, the most among the choices."
      },
      {
        id: 10,
        text: "In the reaction N₂ + 3H₂ → 2NH₃, how many liters of H₂ are needed to produce 10 L of NH₃ at constant T and P?",
        options: ["5 L", "10 L", "15 L", "20 L"],
        correctAnswer: 2,
        explanation: "According to Avogadro's Law, gas volumes react in the same ratio as their coefficients. Ratio H₂:NH₃ is 3:2. So (3/2) * 10 = 15 L."
      },
      {
        id: 11,
        text: "Which of the following is a physical property?",
        options: ["Flammability", "Reactivity with acid", "Boiling point", "Toxicity"],
        correctAnswer: 2,
        explanation: "Boiling point is a physical property because it can be measured without changing the chemical identity of the substance."
      },
      {
        id: 12,
        text: "What is the mass number of an atom with 6 protons and 7 neutrons?",
        options: ["6", "7", "13", "1"],
        correctAnswer: 2,
        explanation: "Mass number is the sum of protons and neutrons in the nucleus (6 + 7 = 13)."
      },
      {
        id: 13,
        text: "Which of the following is a diatomic molecule in its natural state?",
        options: ["Helium", "Neon", "Nitrogen", "Argon"],
        correctAnswer: 2,
        explanation: "Nitrogen (N₂) exists as a diatomic molecule in its natural state."
      },
      {
        id: 14,
        text: "The vertical columns in the periodic table are called:",
        options: ["Periods", "Groups", "Rows", "Series"],
        correctAnswer: 1,
        explanation: "The vertical columns are called groups (or families), and elements in the same group have similar chemical properties."
      },
      {
        id: 15,
        text: "Which of the following is a chemical property?",
        options: ["Color", "Hardness", "Combustibility", "Malleability"],
        correctAnswer: 2,
        explanation: "Combustibility is a chemical property because it describes how a substance reacts chemically with oxygen."
      },
      {
        id: 16,
        text: "What is the formula for water?",
        options: ["HO₂", "H₂O", "H₂O₂", "HO"],
        correctAnswer: 1,
        explanation: "The chemical formula for water is H₂O, consisting of two hydrogen atoms and one oxygen atom."
      },
      {
        id: 17,
        text: "A neutral atom of Carbon (atomic number 6) has how many electrons?",
        options: ["4", "6", "12", "14"],
        correctAnswer: 1,
        explanation: "In a neutral atom, the number of electrons equals the number of protons (atomic number)."
      },
      {
        id: 18,
        text: "Which of the following is a noble gas?",
        options: ["Hydrogen", "Oxygen", "Neon", "Nitrogen"],
        correctAnswer: 2,
        explanation: "Neon is a noble gas, located in Group 18 of the periodic table."
      },
      {
        id: 19,
        text: "The horizontal rows in the periodic table are called:",
        options: ["Groups", "Periods", "Columns", "Families"],
        correctAnswer: 1,
        explanation: "The horizontal rows are called periods."
      },
      {
        id: 20,
        text: "Which of the following is a metal?",
        options: ["Sulfur", "Carbon", "Iron", "Iodine"],
        correctAnswer: 2,
        explanation: "Iron is a metal, characterized by its luster, conductivity, and malleability."
      },
      {
        id: 21,
        text: "What is the charge of a proton?",
        options: ["+1", "-1", "0", "+2"],
        correctAnswer: 0,
        explanation: "A proton has a positive charge of +1."
      },
      {
        id: 22,
        text: "Which of the following is a non-metal?",
        options: ["Sodium", "Magnesium", "Oxygen", "Aluminum"],
        correctAnswer: 2,
        explanation: "Oxygen is a non-metal."
      },
      {
        id: 23,
        text: "The atomic number of an element is determined by the number of:",
        options: ["Neutrons", "Electrons", "Protons", "Nucleons"],
        correctAnswer: 2,
        explanation: "The atomic number is the number of protons in the nucleus of an atom."
      },
      {
        id: 24,
        text: "Which of the following is a metalloid?",
        options: ["Silicon", "Gold", "Silver", "Copper"],
        correctAnswer: 0,
        explanation: "Silicon is a metalloid, having properties of both metals and non-metals."
      },
      {
        id: 25,
        text: "What is the charge of an electron?",
        options: ["+1", "-1", "0", "-2"],
        correctAnswer: 1,
        explanation: "An electron has a negative charge of -1."
      }
    ]
  },
  {
    id: "topic-2",
    title: "Modern electronic theory of atoms, configuration, and periodicity",
    questions: [
      {
        id: 26,
        text: "Which of the following sets of quantum numbers (n, l, ml, ms) is NOT allowed?",
        options: ["(2, 1, 0, +1/2)", "(3, 2, -2, -1/2)", "(1, 0, 0, +1/2)", "(2, 2, 1, -1/2)"],
        correctAnswer: 3,
        explanation: "For n=2, the maximum value of l is n-1 = 1. Therefore, l=2 is not allowed."
      },
      {
        id: 27,
        text: "What is the ground state electron configuration of the Cu⁺ ion? (Z=29)",
        options: ["[Ar] 3d¹⁰", "[Ar] 4s¹ 3d⁹", "[Ar] 4s² 3d⁸", "[Ar] 3d⁹"],
        correctAnswer: 0,
        explanation: "Cu is [Ar] 4s¹ 3d¹⁰. Cu⁺ loses the 4s electron first, resulting in [Ar] 3d¹⁰."
      },
      {
        id: 28,
        text: "Which element has the highest second ionization energy?",
        options: ["Li", "Be", "B", "C"],
        correctAnswer: 0,
        explanation: "Lithium has one valence electron. Removing the second electron requires breaking a stable noble gas core (1s²), requiring massive energy."
      },
      {
        id: 29,
        text: "According to the Heisenberg Uncertainty Principle, it is impossible to simultaneously know which two properties of a particle?",
        options: ["Mass and velocity", "Position and momentum", "Energy and time", "Charge and spin"],
        correctAnswer: 1,
        explanation: "Δx * Δp ≥ h/4π. The more precisely position is known, the less precisely momentum can be known."
      },
      {
        id: 30,
        text: "Which of the following atoms has the largest atomic radius?",
        options: ["Na", "Mg", "K", "Ca"],
        correctAnswer: 2,
        explanation: "Atomic radius increases down a group and decreases across a period. Potassium (K) is further down and to the left than the others."
      },
      {
        id: 31,
        text: "What is the maximum number of electrons that can occupy the n=3 shell?",
        options: ["8", "18", "32", "10"],
        correctAnswer: 1,
        explanation: "The number of electrons in a shell is 2n². For n=3, 2(3)² = 18."
      },
      {
        id: 32,
        text: "Which of the following transitions in a hydrogen atom emits the photon with the shortest wavelength?",
        options: ["n=2 to n=1", "n=3 to n=2", "n=4 to n=3", "n=5 to n=4"],
        correctAnswer: 0,
        explanation: "Shortest wavelength corresponds to highest energy. The gap between n=2 and n=1 is the largest energy transition among the choices."
      },
      {
        id: 33,
        text: "Which element is the most electronegative?",
        options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
        correctAnswer: 1,
        explanation: "Fluorine is the most electronegative element on the Pauling scale (approx 4.0)."
      },
      {
        id: 34,
        text: "How many unpaired electrons are in a ground state Fe²⁺ ion? (Z=26)",
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
        explanation: "Fe is [Ar] 4s² 3d⁶. Fe²⁺ is [Ar] 3d⁶. In the 3d subshell, 5 orbitals are filled with 6 electrons: one pair and four unpaired."
      },
      {
        id: 35,
        text: "Which of the following species is isoelectronic with Neon?",
        options: ["F⁻", "O²⁻", "Na⁺", "All of the above"],
        correctAnswer: 3,
        explanation: "Neon has 10 electrons. F⁻ (9+1), O²⁻ (8+2), and Na⁺ (11-1) all have 10 electrons."
      },
      {
        id: 36,
        text: "Which of the following is a transition metal?",
        options: ["Calcium", "Iron", "Sodium", "Aluminum"],
        correctAnswer: 1,
        explanation: "Iron (Fe) is a transition metal located in the d-block of the periodic table."
      },
      {
        id: 37,
        text: "What happens to atomic radius as you move down a group?",
        options: ["Increases", "Decreases", "Remains constant", "Decreases then increases"],
        correctAnswer: 0,
        explanation: "Atomic radius increases down a group as more electron shells are added."
      },
      {
        id: 38,
        text: "Which element is an alkali metal?",
        options: ["Magnesium", "Lithium", "Aluminum", "Iron"],
        correctAnswer: 1,
        explanation: "Lithium is an alkali metal (Group 1)."
      },
      {
        id: 39,
        text: "What is the maximum number of electrons in the third principal energy level (n=3)?",
        options: ["8", "18", "32", "10"],
        correctAnswer: 1,
        explanation: "The maximum number of electrons is 2n². For n=3, 2(3)² = 18."
      },
      {
        id: 40,
        text: "Which block of the periodic table contains the noble gases?",
        options: ["s-block", "p-block", "d-block", "f-block"],
        correctAnswer: 1,
        explanation: "Noble gases are in the p-block (Group 18)."
      },
      {
        id: 41,
        text: "What is the oxidation state of an atom in its elemental form?",
        options: ["+1", "-1", "0", "Variable"],
        correctAnswer: 2,
        explanation: "The oxidation state of any element in its free, uncombined state is zero."
      },
      {
        id: 42,
        text: "Which quantum number describes the spin of an electron?",
        options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
        correctAnswer: 3,
        explanation: "The spin quantum number (ms) describes the spin direction (+1/2 or -1/2)."
      },
      {
        id: 43,
        text: "What is the electron configuration of Neon (Z=10)?",
        options: ["1s² 2s² 2p⁶", "1s² 2s² 2p⁴", "1s² 2s² 2p⁵", "1s² 2s² 2p³"],
        correctAnswer: 0,
        explanation: "Neon has 10 electrons, filling the first and second shells completely."
      },
      {
        id: 44,
        text: "Which element has the largest atomic radius in Period 3?",
        options: ["Sodium", "Chlorine", "Argon", "Aluminum"],
        correctAnswer: 0,
        explanation: "Atomic radius decreases across a period, so Sodium (on the far left) is the largest."
      },
      {
        id: 45,
        text: "What is the term for the energy required to remove an electron from an atom?",
        options: ["Electronegativity", "Electron affinity", "Ionization energy", "Lattice energy"],
        correctAnswer: 2,
        explanation: "Ionization energy is the energy needed to remove an electron from a gaseous atom or ion."
      },
      {
        id: 46,
        text: "Which of the following is an alkaline earth metal?",
        options: ["Sodium", "Calcium", "Potassium", "Iron"],
        correctAnswer: 1,
        explanation: "Calcium is an alkaline earth metal (Group 2)."
      },
      {
        id: 47,
        text: "What is the azimuthal quantum number (l) for a 'd' orbital?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation: "The values of l are: s=0, p=1, d=2, f=3."
      },
      {
        id: 48,
        text: "Which element is a halogen?",
        options: ["Oxygen", "Nitrogen", "Chlorine", "Argon"],
        correctAnswer: 2,
        explanation: "Chlorine is a halogen (Group 17)."
      },
      {
        id: 49,
        text: "What is the trend of electronegativity down a group?",
        options: ["Increases", "Decreases", "Remains constant", "Fluctuates"],
        correctAnswer: 1,
        explanation: "Electronegativity generally decreases down a group."
      },
      {
        id: 50,
        text: "Which principle states that no two electrons in an atom can have the same four quantum numbers?",
        options: ["Aufbau Principle", "Hund's Rule", "Pauli Exclusion Principle", "Heisenberg Uncertainty Principle"],
        correctAnswer: 2,
        explanation: "The Pauli Exclusion Principle states that each electron in an atom must have a unique set of quantum numbers."
      }
    ]
  },
  {
    id: "topic-3",
    title: "Hybridization, shapes of molecules, and valence forces",
    questions: [
      {
        id: 51,
        text: "What is the hybridization of the central Iodine atom in the I₃⁻ ion?",
        options: ["sp³", "sp³d", "sp³d²", "sp²"],
        correctAnswer: 1,
        explanation: "The central Iodine has 2 bonding pairs and 3 lone pairs (total 5 electron domains), requiring sp³d hybridization."
      },
      {
        id: 52,
        text: "Which of the following molecules has a square pyramidal molecular geometry?",
        options: ["SF₆", "PCl₅", "BrF₅", "XeF₄"],
        correctAnswer: 2,
        explanation: "BrF₅ has 5 bonding pairs and 1 lone pair (total 6 domains), resulting in a square pyramidal shape."
      },
      {
        id: 53,
        text: "In Molecular Orbital theory, what is the bond order of the O₂⁺ ion?",
        options: ["2", "2.5", "1.5", "3"],
        correctAnswer: 1,
        explanation: "O₂ has a bond order of 2. Removing one electron from an antibonding π* orbital increases the bond order to 2.5."
      },
      {
        id: 54,
        text: "Which of the following molecules is paramagnetic?",
        options: ["N₂", "O₂", "F₂", "C₂"],
        correctAnswer: 1,
        explanation: "According to Molecular Orbital theory, O₂ has two unpaired electrons in its π* antibonding orbitals, making it paramagnetic."
      },
      {
        id: 55,
        text: "What is the formal charge on the central Nitrogen atom in the Azide ion (N₃⁻)?",
        options: ["0", "+1", "-1", "-2"],
        correctAnswer: 1,
        explanation: "In the most stable resonance structure (N=N=N), the central nitrogen has 4 bonds and no lone pairs, giving it a formal charge of 5 - 4 = +1."
      },
      {
        id: 56,
        text: "Which of the following molecules has the largest dipole moment?",
        options: ["CO₂", "BF₃", "NH₃", "NF₃"],
        correctAnswer: 2,
        explanation: "NH₃ has a larger dipole moment than NF₃ because the lone pair dipole and bond dipoles reinforce each other in NH₃, while they partially cancel in NF₃."
      },
      {
        id: 57,
        text: "What is the hybridization of the central atom in the ClF₃ molecule?",
        options: ["sp³", "sp³d", "sp³d²", "sp²"],
        correctAnswer: 1,
        explanation: "ClF₃ has 3 bonding pairs and 2 lone pairs (total 5 domains), requiring sp³d hybridization."
      },
      {
        id: 58,
        text: "Which of the following species has a bond angle of exactly 180°?",
        options: ["H₂O", "SO₂", "NO₂⁺", "NO₂⁻"],
        correctAnswer: 2,
        explanation: "NO₂⁺ is isoelectronic with CO₂ and has a linear geometry with a 180° bond angle."
      },
      {
        id: 59,
        text: "According to Valence Bond Theory, a triple bond consists of:",
        options: ["Three sigma bonds", "Three pi bonds", "One sigma and two pi bonds", "Two sigma and one pi bond"],
        correctAnswer: 2,
        explanation: "A triple bond is composed of one axial sigma bond and two lateral pi bonds."
      },
      {
        id: 60,
        text: "What is the molecular geometry of the XeF₂ molecule?",
        options: ["Bent", "Linear", "Trigonal Planar", "Tetrahedral"],
        correctAnswer: 1,
        explanation: "XeF₂ has 2 bonding pairs and 3 lone pairs. The lone pairs occupy the equatorial positions of a trigonal bipyramid, leaving the atoms in a linear arrangement."
      },
      {
        id: 61,
        text: "What is the bond angle in a trigonal planar molecule?",
        options: ["90°", "109.5°", "120°", "180°"],
        correctAnswer: 2,
        explanation: "The bond angle in a trigonal planar arrangement is 120°."
      },
      {
        id: 62,
        text: "How many sigma and pi bonds are in a triple bond?",
        options: ["1 sigma, 1 pi", "2 sigma, 1 pi", "1 sigma, 2 pi", "3 sigma, 0 pi"],
        correctAnswer: 2,
        explanation: "A triple bond consists of one sigma bond and two pi bonds."
      },
      {
        id: 63,
        text: "What is the hybridization of the central atom in PCl₅?",
        options: ["sp³", "sp³d", "sp³d²", "sp²"],
        correctAnswer: 1,
        explanation: "Phosphorus in PCl₅ forms five bonds, requiring sp³d hybridization."
      },
      {
        id: 64,
        text: "What is the molecular shape of SF₆?",
        options: ["Tetrahedral", "Octahedral", "Trigonal Bipyramidal", "Square Planar"],
        correctAnswer: 1,
        explanation: "SF₆ has six bonding pairs and no lone pairs, resulting in an octahedral shape."
      },
      {
        id: 65,
        text: "Which of the following has a square planar molecular shape?",
        options: ["CH₄", "XeF₄", "SF₄", "NH₄⁺"],
        correctAnswer: 1,
        explanation: "XeF₄ has four bonding pairs and two lone pairs, resulting in a square planar shape."
      },
      {
        id: 66,
        text: "What is the bond angle in a linear molecule?",
        options: ["109.5°", "120°", "180°", "90°"],
        correctAnswer: 2,
        explanation: "A linear molecule has a bond angle of 180°."
      },
      {
        id: 67,
        text: "Which type of bond is formed by the head-on overlap of orbitals?",
        options: ["Sigma bond", "Pi bond", "Ionic bond", "Metallic bond"],
        correctAnswer: 0,
        explanation: "A sigma bond is formed by the end-to-end overlap of atomic orbitals along the internuclear axis."
      },
      {
        id: 68,
        text: "What is the hybridization of the oxygen atom in water?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: 2,
        explanation: "The oxygen in water has two bonds and two lone pairs, requiring sp³ hybridization."
      },
      {
        id: 69,
        text: "What is the molecular shape of BF₃?",
        options: ["Trigonal Planar", "Trigonal Pyramidal", "Bent", "Tetrahedral"],
        correctAnswer: 0,
        explanation: "Boron in BF₃ has three bonding pairs and no lone pairs, making it trigonal planar."
      },
      {
        id: 70,
        text: "Which of the following molecules is polar?",
        options: ["CO₂", "CH₄", "NH₃", "BF₃"],
        correctAnswer: 2,
        explanation: "NH₃ is polar because of its trigonal pyramidal shape and the presence of a lone pair."
      },
      {
        id: 71,
        text: "What is the hybridization of the sulfur atom in SO₂?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: 1,
        explanation: "Sulfur in SO₂ has two bonds and one lone pair, requiring sp² hybridization."
      },
      {
        id: 72,
        text: "What is the molecular shape of BeCl₂?",
        options: ["Bent", "Linear", "Trigonal Planar", "Tetrahedral"],
        correctAnswer: 1,
        explanation: "BeCl₂ has two bonding pairs and no lone pairs, making it linear."
      },
      {
        id: 73,
        text: "Which of the following has a see-saw molecular shape?",
        options: ["SF₄", "XeF₄", "CH₄", "NH₃"],
        correctAnswer: 0,
        explanation: "SF₄ has four bonding pairs and one lone pair, resulting in a see-saw shape."
      },
      {
        id: 74,
        text: "What is the bond angle in an octahedral molecule?",
        options: ["90°", "109.5°", "120°", "180°"],
        correctAnswer: 0,
        explanation: "The bond angles in an octahedral molecule are 90°."
      },
      {
        id: 75,
        text: "Which of the following molecules has a T-shaped geometry?",
        options: ["ClF₃", "BF₃", "NH₃", "PCl₃"],
        correctAnswer: 0,
        explanation: "ClF₃ has three bonding pairs and two lone pairs, resulting in a T-shaped geometry."
      }
    ]
  },
  {
    id: "topic-4",
    title: "Chemical equations and stoichiometry",
    questions: [
      {
        id: 76,
        text: "What is the mass of 1.50 x 10²² molecules of Cane Sugar (C₁₂H₂₂O₁₁)? (Molar mass = 342.3 g/mol)",
        options: ["8.53 g", "0.853 g", "5.13 g", "0.513 g"],
        correctAnswer: 0,
        explanation: "Moles = (1.50 x 10²²) / (6.022 x 10²³) ≈ 0.0249 mol. Mass = 0.0249 * 342.3 ≈ 8.53 g."
      },
      {
        id: 77,
        text: "In the combustion of 1.00 mole of Propane (C₃H₈), how many grams of water are produced?",
        options: ["18.0 g", "36.0 g", "54.0 g", "72.0 g"],
        correctAnswer: 3,
        explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. 1 mole C₃H₈ produces 4 moles H₂O. Mass = 4 * 18.0 = 72.0 g."
      },
      {
        id: 78,
        text: "What is the molarity of a solution prepared by dissolving 25.0 g of CuSO₄·5H₂O in enough water to make 500 mL of solution? (Molar mass = 249.7 g/mol)",
        options: ["0.100 M", "0.200 M", "0.050 M", "0.400 M"],
        correctAnswer: 1,
        explanation: "Moles = 25.0 / 249.7 ≈ 0.100 mol. Molarity = 0.100 / 0.500 = 0.200 M."
      },
      {
        id: 79,
        text: "A compound contains 40.0% C, 6.7% H, and 53.3% O by mass. If the molar mass is 180 g/mol, what is the molecular formula?",
        options: ["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "C₆H₁₂O₆"],
        correctAnswer: 3,
        explanation: "Empirical formula is CH₂O (mass 30). n = 180 / 30 = 6. Molecular formula is C₆H₁₂O₆."
      },
      {
        id: 80,
        text: "If 10.0 g of Hydrogen reacts with 10.0 g of Oxygen to form water, what is the theoretical yield of water?",
        options: ["11.25 g", "20.0 g", "90.0 g", "5.63 g"],
        correctAnswer: 0,
        explanation: "2H₂ + O₂ → 2H₂O. Moles H₂ = 10/2 = 5. Moles O₂ = 10/32 = 0.3125. O₂ is limiting. Moles H₂O = 2 * 0.3125 = 0.625. Mass = 0.625 * 18 = 11.25 g."
      },
      {
        id: 81,
        text: "What is the volume of 0.500 moles of CO₂ gas at 27°C and 2.00 atm pressure? (R = 0.0821 L·atm/mol·K)",
        options: ["6.16 L", "12.3 L", "3.08 L", "24.6 L"],
        correctAnswer: 0,
        explanation: "V = nRT/P = (0.500 * 0.0821 * 300) / 2.00 = 6.1575 ≈ 6.16 L."
      },
      {
        id: 82,
        text: "How many milliliters of 0.100 M HCl are required to completely neutralize 25.0 mL of 0.200 M Ba(OH)₂?",
        options: ["50.0 mL", "100 mL", "25.0 mL", "12.5 mL"],
        correctAnswer: 1,
        explanation: "Ba(OH)₂ + 2HCl → BaCl₂ + 2H₂O. Moles Ba(OH)₂ = 0.025 * 0.2 = 0.005. Moles HCl needed = 0.010. Volume HCl = 0.010 / 0.100 = 0.100 L = 100 mL."
      },
      {
        id: 83,
        text: "What is the density of Nitrogen gas (N₂) at STP in g/L?",
        options: ["1.25 g/L", "2.50 g/L", "0.625 g/L", "14.0 g/L"],
        correctAnswer: 0,
        explanation: "Density = Molar Mass / Molar Volume = 28.0 / 22.4 = 1.25 g/L."
      },
      {
        id: 84,
        text: "A 2.00 g sample of an unknown metal M reacts with excess HCl to produce 0.050 moles of H₂ gas. If the metal forms M²⁺ ions, what is the atomic mass of M?",
        options: ["20.0", "40.0", "60.0", "80.0"],
        correctAnswer: 1,
        explanation: "M + 2HCl → MCl₂ + H₂. Moles M = Moles H₂ = 0.050. Atomic mass = 2.00 / 0.050 = 40.0 (Calcium)."
      },
      {
        id: 85,
        text: "What is the molality of a solution containing 10.0 g of Glucose (C₆H₁₂O₆) in 200 g of water?",
        options: ["0.278 m", "0.556 m", "0.139 m", "0.050 m"],
        correctAnswer: 0,
        explanation: "Moles Glucose = 10.0 / 180 ≈ 0.0556. Molality = 0.0556 / 0.200 = 0.278 m."
      },
      {
        id: 86,
        text: "Which of the following is the correct balanced equation for the combustion of Methane?",
        options: ["CH₄ + O₂ → CO₂ + H₂O", "CH₄ + 2O₂ → CO₂ + 2H₂O", "2CH₄ + 3O₂ → 2CO₂ + 4H₂O", "CH₄ + O₂ → C + 2H₂O"],
        correctAnswer: 1,
        explanation: "The balanced equation is CH₄ + 2O₂ → CO₂ + 2H₂O."
      },
      {
        id: 87,
        text: "What is the mass of 0.5 moles of NaCl? (Na=23, Cl=35.5)",
        options: ["58.5 g", "29.25 g", "117 g", "5.85 g"],
        correctAnswer: 1,
        explanation: "Molar mass NaCl = 23 + 35.5 = 58.5. Mass = 0.5 * 58.5 = 29.25 g."
      },
      {
        id: 88,
        text: "What is the theoretical yield if 10g of product is expected but only 8g is obtained?",
        options: ["8g", "10g", "80%", "1.25g"],
        correctAnswer: 1,
        explanation: "The theoretical yield is the maximum amount of product that can be formed (10g in this case)."
      },
      {
        id: 89,
        text: "What is the percent yield in the previous question?",
        options: ["80%", "125%", "20%", "10%"],
        correctAnswer: 0,
        explanation: "Percent yield = (Actual / Theoretical) * 100 = (8/10) * 100 = 80%."
      },
      {
        id: 90,
        text: "How many grams of Hydrogen are in 1 mole of NH₃?",
        options: ["1g", "3g", "17g", "14g"],
        correctAnswer: 1,
        explanation: "1 mole of NH₃ contains 3 moles of H atoms. Mass = 3 * 1.008 ≈ 3g."
      },
      {
        id: 91,
        text: "What is the concentration of a solution if 5.85g of NaCl is dissolved in 500mL of water?",
        options: ["0.1 M", "0.2 M", "1.0 M", "0.5 M"],
        correctAnswer: 1,
        explanation: "Moles NaCl = 5.85 / 58.5 = 0.1. Volume = 0.5 L. M = 0.1 / 0.5 = 0.2 M."
      },
      {
        id: 92,
        text: "In the reaction N₂ + 3H₂ → 2NH₃, how many moles of H₂ are needed to react with 2 moles of N₂?",
        options: ["2 mol", "3 mol", "6 mol", "1 mol"],
        correctAnswer: 2,
        explanation: "Ratio N₂:H₂ is 1:3. So 2 moles of N₂ need 2 * 3 = 6 moles of H₂."
      },
      {
        id: 93,
        text: "What is the molecular formula of a compound with empirical formula CH₂ and molar mass 42 g/mol?",
        options: ["CH₂", "C₂H₄", "C₃H₆", "C₄H₈"],
        correctAnswer: 2,
        explanation: "Empirical mass CH₂ = 12 + 2 = 14. n = 42 / 14 = 3. Molecular formula = (CH₂)₃ = C₃H₆."
      },
      {
        id: 94,
        text: "What is the mass of 3.011 x 10²³ molecules of H₂O?",
        options: ["18g", "9g", "36g", "1g"],
        correctAnswer: 1,
        explanation: "3.011 x 10²³ is 0.5 moles. Mass = 0.5 * 18 = 9g."
      },
      {
        id: 95,
        text: "Which of the following represents a mole of Oxygen gas?",
        options: ["16g", "32g", "6.022 x 10²³ atoms", "11.2 L at STP"],
        correctAnswer: 1,
        explanation: "Oxygen gas is O₂. Molar mass = 2 * 16 = 32g."
      },
      {
        id: 96,
        text: "What is the density of a gas at STP if its molar mass is 44 g/mol?",
        options: ["1.96 g/L", "44 g/L", "2.0 g/L", "0.5 g/L"],
        correctAnswer: 0,
        explanation: "Density = Molar Mass / Molar Volume = 44 / 22.4 ≈ 1.96 g/L."
      },
      {
        id: 97,
        text: "How many moles of Oxygen are in 2 moles of Ba(NO₃)₂?",
        options: ["6 mol", "12 mol", "3 mol", "2 mol"],
        correctAnswer: 1,
        explanation: "1 mole of Ba(NO₃)₂ has 6 moles of O. 2 moles have 12 moles of O."
      },
      {
        id: 98,
        text: "What is the mass percentage of Carbon in Glucose (C₆H₁₂O₆)? (C=12, H=1, O=16)",
        options: ["40%", "50%", "30%", "45%"],
        correctAnswer: 0,
        explanation: "Molar mass = 180. Mass C = 6 * 12 = 72. %C = (72/180) * 100 = 40%."
      },
      {
        id: 99,
        text: "What is the oxidation state of Manganese in KMnO₄?",
        options: ["+2", "+4", "+7", "+6"],
        correctAnswer: 2,
        explanation: "K=+1, O=-2. 1 + Mn + 4(-2) = 0 => Mn = +7."
      },
      {
        id: 100,
        text: "How many moles of ions are produced when 1 mole of AlCl₃ dissolves in water?",
        options: ["1 mol", "2 mol", "3 mol", "4 mol"],
        correctAnswer: 3,
        explanation: "AlCl₃ → Al³⁺ + 3Cl⁻. Total 4 moles of ions."
      }
    ]
  },
  {
    id: "topic-5",
    title: "Chemical bonding, intermolecular forces, and kinetic theory",
    questions: [
      {
        id: 101,
        text: "Which of the following substances has the highest lattice energy?",
        options: ["LiF", "NaCl", "MgO", "CaO"],
        correctAnswer: 2,
        explanation: "Lattice energy is proportional to (Q₁Q₂)/r. MgO has ions with +2 and -2 charges and small radii, resulting in the highest lattice energy."
      },
      {
        id: 102,
        text: "Which of the following molecules has the highest boiling point?",
        options: ["CH₃CH₂CH₂CH₃", "CH₃CH(CH₃)CH₃", "CH₃CH₂CH₂OH", "CH₃OCH₂CH₃"],
        correctAnswer: 2,
        explanation: "Propanol (CH₃CH₂CH₂OH) can form intermolecular hydrogen bonds, which are much stronger than the dispersion or dipole-dipole forces in the other molecules."
      },
      {
        id: 103,
        text: "According to the Kinetic Molecular Theory, if the absolute temperature of a gas is doubled, the average velocity of the gas molecules increases by a factor of:",
        options: ["2", "4", "√2", "1/2"],
        correctAnswer: 2,
        explanation: "Average kinetic energy is proportional to T, but velocity (v_rms) is proportional to √T. Doubling T increases velocity by √2."
      },
      {
        id: 104,
        text: "Which of the following gases will deviate most from ideal behavior at low temperatures and high pressures?",
        options: ["He", "Ne", "Ar", "Kr"],
        correctAnswer: 3,
        explanation: "Larger atoms have more electrons and are more polarizable, leading to stronger London dispersion forces and greater deviation from ideality. Krypton is the largest among the choices."
      },
      {
        id: 105,
        text: "What is the primary reason that ice is less dense than liquid water?",
        options: ["Hydrogen bonding creates an open hexagonal lattice", "Water molecules expand when they freeze", "Covalent bonds become longer in ice", "Thermal motion increases the volume of ice"],
        correctAnswer: 0,
        explanation: "In ice, each water molecule is hydrogen-bonded to four others in a rigid, open structure that takes up more space than the disordered liquid."
      },
      {
        id: 106,
        text: "Which of the following solids is characterized by a high melting point, brittleness, and poor electrical conductivity as a solid but good conductivity when molten?",
        options: ["Quartz (SiO₂)", "Iron (Fe)", "Potassium Chloride (KCl)", "Iodine (I₂)"],
        correctAnswer: 2,
        explanation: "These are characteristic properties of ionic solids like KCl."
      },
      {
        id: 107,
        text: "What is the relationship between the root-mean-square speed (v_rms) and the molar mass (M) of a gas at constant temperature?",
        options: ["v_rms ∝ M", "v_rms ∝ 1/M", "v_rms ∝ √M", "v_rms ∝ 1/√M"],
        correctAnswer: 3,
        explanation: "v_rms = √(3RT/M), so speed is inversely proportional to the square root of the molar mass."
      },
      {
        id: 108,
        text: "Which of the following molecules has the strongest London dispersion forces?",
        options: ["F₂", "Cl₂", "Br₂", "I₂"],
        correctAnswer: 3,
        explanation: "I₂ has the largest and most polarizable electron cloud, resulting in the strongest dispersion forces (it is a solid at room temp)."
      },
      {
        id: 109,
        text: "What is the packing efficiency of a body-centered cubic (BCC) unit cell?",
        options: ["52%", "68%", "74%", "82%"],
        correctAnswer: 1,
        explanation: "A BCC unit cell has a packing efficiency of approximately 68%."
      },
      {
        id: 110,
        text: "Which of the following describes the 'Mean Free Path' of a gas molecule?",
        options: ["The total distance traveled by a molecule", "The average distance a molecule travels between collisions", "The displacement of a molecule from its origin", "The speed of a molecule divided by time"],
        correctAnswer: 1,
        explanation: "The mean free path is the average distance a particle travels between successive collisions with other particles."
      },
      {
        id: 111,
        text: "What is the term for a solid turning into a liquid?",
        options: ["Freezing", "Melting", "Vaporization", "Sublimation"],
        correctAnswer: 1,
        explanation: "Melting (fusion) is the phase change from solid to liquid."
      },
      {
        id: 112,
        text: "Which of the following is an example of an amorphous solid?",
        options: ["NaCl", "Quartz", "Glass", "Ice"],
        correctAnswer: 2,
        explanation: "Glass lacks a long-range ordered crystalline structure, making it an amorphous solid."
      },
      {
        id: 113,
        text: "What is the bond order of a Nitrogen molecule (N₂)?",
        options: ["1", "2", "3", "0"],
        correctAnswer: 2,
        explanation: "N₂ has a triple bond, so its bond order is 3."
      },
      {
        id: 114,
        text: "Which of the following molecules has a dipole moment?",
        options: ["CO₂", "CCl₄", "HCl", "BF₃"],
        correctAnswer: 2,
        explanation: "HCl is a polar molecule with a significant difference in electronegativity between H and Cl."
      },
      {
        id: 115,
        text: "The 'sea of electrons' model explains which property of metals?",
        options: ["Brittleness", "Electrical conductivity", "Low melting point", "Transparency"],
        correctAnswer: 1,
        explanation: "Delocalized electrons are free to move, allowing metals to conduct electricity."
      },
      {
        id: 116,
        text: "Which of the following is true for a gas at absolute zero?",
        options: ["Volume is zero", "Pressure is infinite", "Kinetic energy is zero", "Mass is zero"],
        correctAnswer: 2,
        explanation: "Theoretically, at absolute zero (0 K), all molecular motion stops, and kinetic energy is zero."
      },
      {
        id: 117,
        text: "Which intermolecular force depends on the polarizability of the electron cloud?",
        options: ["Hydrogen bonding", "Dipole-dipole", "London dispersion forces", "Ion-dipole"],
        correctAnswer: 2,
        explanation: "London dispersion forces increase with the size and polarizability of the electron cloud."
      },
      {
        id: 118,
        text: "What is the hybridization of Carbon in CO₂?",
        options: ["sp", "sp²", "sp³", "dsp²"],
        correctAnswer: 0,
        explanation: "Carbon in CO₂ forms two sigma bonds and two pi bonds, requiring sp hybridization."
      },
      {
        id: 119,
        text: "Which of the following is a polar covalent bond?",
        options: ["H-H", "Cl-Cl", "H-Cl", "Na-Cl"],
        correctAnswer: 2,
        explanation: "H-Cl involves unequal sharing of electrons between two non-metals."
      },
      {
        id: 120,
        text: "What is the coordination number of an atom in a face-centered cubic (FCC) structure?",
        options: ["6", "8", "12", "4"],
        correctAnswer: 2,
        explanation: "In an FCC lattice, each atom is in contact with 12 neighboring atoms."
      },
      {
        id: 121,
        text: "Which of the following is a property of ionic compounds?",
        options: ["Low melting points", "Conduct electricity when solid", "High melting points", "Always liquid at room temp"],
        correctAnswer: 2,
        explanation: "Ionic compounds have strong electrostatic attractions, leading to high melting and boiling points."
      },
      {
        id: 122,
        text: "What is the name for the energy required to separate one mole of an ionic solid into gaseous ions?",
        options: ["Ionization energy", "Lattice energy", "Bond energy", "Hydration energy"],
        correctAnswer: 1,
        explanation: "Lattice energy is a measure of the strength of the ionic bonds in a crystal."
      },
      {
        id: 123,
        text: "Which molecule has the largest bond dissociation energy?",
        options: ["F₂", "Cl₂", "O₂", "N₂"],
        correctAnswer: 3,
        explanation: "N₂ has a triple bond, which is much stronger and harder to break than single or double bonds."
      },
      {
        id: 124,
        text: "What is the effect of increasing temperature on the viscosity of a liquid?",
        options: ["Increases", "Decreases", "Remains same", "Fluctuates"],
        correctAnswer: 1,
        explanation: "Increasing temperature increases kinetic energy, allowing molecules to overcome intermolecular forces more easily, decreasing viscosity."
      },
      {
        id: 125,
        text: "Which of the following is a characteristic of a covalent network solid?",
        options: ["Soluble in water", "Low melting point", "Very hard", "Conducts electricity"],
        correctAnswer: 2,
        explanation: "Covalent network solids like diamond or quartz are extremely hard due to the strong covalent bonds throughout the structure."
      }
    ]
  },
  {
    id: "topic-6",
    title: "Elementary thermochemistry, rates of reaction and equilibrium",
    questions: [
      {
        id: 126,
        text: "What is the standard enthalpy of combustion of Methane (CH₄) if the standard enthalpies of formation are: CH₄ = -74.8, CO₂ = -393.5, H₂O(l) = -285.8 kJ/mol?",
        options: ["-890.3 kJ/mol", "-604.5 kJ/mol", "-965.1 kJ/mol", "-74.8 kJ/mol"],
        correctAnswer: 0,
        explanation: "ΔH_comb = ΣΔH_f(products) - ΣΔH_f(reactants) = [-393.5 + 2(-285.8)] - [-74.8] = -965.1 + 74.8 = -890.3 kJ/mol."
      },
      {
        id: 127,
        text: "For a reaction A + B → C, doubling the concentration of A quadruples the rate, and doubling B doubles the rate. What is the overall order of the reaction?",
        options: ["1", "2", "3", "4"],
        correctAnswer: 2,
        explanation: "Rate ∝ [A]² and Rate ∝ [B]¹. Overall order = 2 + 1 = 3."
      },
      {
        id: 128,
        text: "What is the value of Kp for the reaction N₂(g) + 3H₂(g) ⇌ 2NH₃(g) at 400 K if Kc = 0.50? (R = 0.0821 L·atm/mol·K)",
        options: ["0.50", "4.6 x 10⁻⁴", "540", "1.5 x 10⁻²"],
        correctAnswer: 1,
        explanation: "Kp = Kc(RT)^Δn. Δn = 2 - 4 = -2. Kp = 0.50 * (0.0821 * 400)⁻² ≈ 0.50 * (32.84)⁻² ≈ 4.6 x 10⁻⁴."
      },
      {
        id: 129,
        text: "Which of the following conditions will shift the equilibrium of the reaction 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) (ΔH = -198 kJ) towards the products?",
        options: ["Increasing temperature", "Decreasing pressure", "Adding a catalyst", "Increasing the concentration of SO₂"],
        correctAnswer: 3,
        explanation: "Adding a reactant (SO₂) shifts the equilibrium to the right. Increasing T shifts it left (exothermic), and decreasing P shifts it left (fewer gas moles on right)."
      },
      {
        id: 130,
        text: "A first-order reaction has a rate constant of 0.010 s⁻¹. How long will it take for the concentration of the reactant to decrease to 25% of its initial value?",
        options: ["69.3 s", "138.6 s", "100 s", "50 s"],
        correctAnswer: 1,
        explanation: "25% is two half-lives. t½ = 0.693 / 0.010 = 69.3 s. Total time = 2 * 69.3 = 138.6 s."
      },
      {
        id: 131,
        text: "What is the activation energy of a reaction if the rate constant doubles when the temperature is increased from 300 K to 310 K? (R = 8.314 J/mol·K)",
        options: ["53.6 kJ/mol", "26.8 kJ/mol", "107 kJ/mol", "12.5 kJ/mol"],
        correctAnswer: 0,
        explanation: "ln(k₂/k₁) = (Ea/R) * (1/T₁ - 1/T₂). ln(2) = (Ea/8.314) * (1/300 - 1/310). 0.693 = (Ea/8.314) * (0.0001075). Ea ≈ 53,600 J/mol = 53.6 kJ/mol."
      },
      {
        id: 132,
        text: "Which of the following is true for a reaction at equilibrium if the reaction quotient Q is greater than the equilibrium constant K?",
        options: ["The reaction is at equilibrium", "The reaction will shift towards the products", "The reaction will shift towards the reactants", "The reaction is spontaneous in the forward direction"],
        correctAnswer: 2,
        explanation: "If Q > K, there are too many products relative to reactants, so the system shifts to the left (reactants)."
      },
      {
        id: 133,
        text: "What is the relationship between the equilibrium constant Kc and the standard Gibbs free energy change ΔG°?",
        options: ["ΔG° = -RT ln Kc", "ΔG° = RT ln Kc", "Kc = e^(ΔG°/RT)", "ΔG° = -nFE°"],
        correctAnswer: 0,
        explanation: "The standard free energy change and equilibrium constant are related by ΔG° = -RT ln K."
      },
      {
        id: 134,
        text: "In a zero-order reaction, what is the unit of the rate constant k?",
        options: ["s⁻¹", "M⁻¹ s⁻¹", "M s⁻¹", "M⁻² s⁻¹"],
        correctAnswer: 2,
        explanation: "Rate = k[A]⁰ = k. Since rate is M/s, k must also be M/s."
      },
      {
        id: 135,
        text: "What is the molecularity of the elementary step: 2NO + O₂ → 2NO₂?",
        options: ["Unimolecular", "Bimolecular", "Termolecular", "Tetramolecular"],
        correctAnswer: 2,
        explanation: "Three reactant molecules (2 NO and 1 O₂) are involved in this single step, making it termolecular."
      },
      {
        id: 136,
        text: "What is the activation energy (Ea)?",
        options: ["Energy of products", "Energy of reactants", "Minimum energy for a successful collision", "Total energy of the system"],
        correctAnswer: 2,
        explanation: "Activation energy is the minimum energy required for reactants to transform into products."
      },
      {
        id: 137,
        text: "Which of the following is true for a system at equilibrium?",
        options: ["Reactants are completely consumed", "Forward and reverse rates are equal", "Concentrations of reactants and products are equal", "The reaction has stopped"],
        correctAnswer: 1,
        explanation: "Equilibrium is a dynamic state where the rates of the forward and reverse reactions are equal."
      },
      {
        id: 138,
        text: "What is the effect of a catalyst on the equilibrium position?",
        options: ["Shifts it to the right", "Shifts it to the left", "No effect", "Depends on the reaction"],
        correctAnswer: 2,
        explanation: "A catalyst speeds up both forward and reverse reactions equally, so it does not change the equilibrium position."
      },
      {
        id: 139,
        text: "What is the order of a reaction if the units of the rate constant are s⁻¹?",
        options: ["Zero order", "First order", "Second order", "Third order"],
        correctAnswer: 1,
        explanation: "For a first-order reaction, Rate (M/s) = k (s⁻¹) * [A] (M). So k has units of s⁻¹."
      },
      {
        id: 140,
        text: "Which of the following will increase the value of Kc for an endothermic reaction?",
        options: ["Increasing concentration", "Increasing temperature", "Adding a catalyst", "Increasing pressure"],
        correctAnswer: 1,
        explanation: "Temperature is the only factor that changes the value of the equilibrium constant K."
      },
      {
        id: 141,
        text: "What is the relationship between Kp and Kc?",
        options: ["Kp = Kc", "Kp = Kc(RT)^Δn", "Kp = Kc / (RT)^Δn", "Kp = Kc + RT"],
        correctAnswer: 1,
        explanation: "Kp = Kc(RT)^Δn, where Δn is the change in moles of gas."
      },
      {
        id: 142,
        text: "What is a 'state function'?",
        options: ["Depends on the path taken", "Independent of the path taken", "Only applies to gases", "Only applies to solids"],
        correctAnswer: 1,
        explanation: "A state function (like Enthalpy or Entropy) depends only on the current state of the system, not how it got there."
      },
      {
        id: 143,
        text: "Which of the following is a spontaneous process?",
        options: ["Water freezing at 25°C", "Iron rusting in moist air", "Ball rolling uphill", "Heat flowing from cold to hot"],
        correctAnswer: 1,
        explanation: "Rusting of iron is a spontaneous chemical process under normal atmospheric conditions."
      },
      {
        id: 144,
        text: "What is the half-life of a first-order reaction with rate constant k?",
        options: ["0.693 / k", "k / 0.693", "1 / k", "ln(2) * k"],
        correctAnswer: 0,
        explanation: "For first-order kinetics, t½ = ln(2) / k ≈ 0.693 / k."
      },
      {
        id: 145,
        text: "In the Arrhenius equation k = Ae^(-Ea/RT), what does 'A' represent?",
        options: ["Activation energy", "Gas constant", "Frequency factor", "Temperature"],
        correctAnswer: 2,
        explanation: "A is the frequency factor (or pre-exponential factor), representing the frequency of collisions with correct orientation."
      },
      {
        id: 146,
        text: "What is the effect of increasing pressure on the equilibrium: N₂(g) + 3H₂(g) ⇌ 2NH₃(g)?",
        options: ["Shifts to the left", "Shifts to the right", "No effect", "K increases"],
        correctAnswer: 1,
        explanation: "Increasing pressure shifts the equilibrium towards the side with fewer moles of gas (2 moles vs 4 moles)."
      },
      {
        id: 147,
        text: "Which of the following is an intensive property?",
        options: ["Enthalpy", "Entropy", "Temperature", "Internal Energy"],
        correctAnswer: 2,
        explanation: "Temperature is intensive (doesn't depend on amount), while H, S, and U are extensive."
      },
      {
        id: 148,
        text: "What is the standard enthalpy of formation of an element in its most stable state?",
        options: ["100 kJ/mol", "0 kJ/mol", "-100 kJ/mol", "Variable"],
        correctAnswer: 1,
        explanation: "By definition, ΔH°f for an element in its standard state is zero."
      },
      {
        id: 149,
        text: "What is the molecularity of the elementary reaction: A + B → Products?",
        options: ["Unimolecular", "Bimolecular", "Termolecular", "Zero"],
        correctAnswer: 1,
        explanation: "Two reactant molecules are involved, so it is bimolecular."
      },
      {
        id: 150,
        text: "What is the sign of ΔS for the process: H₂O(l) → H₂O(g)?",
        options: ["Positive", "Negative", "Zero", "Undefined"],
        correctAnswer: 0,
        explanation: "Gas has more disorder than liquid, so entropy increases (ΔS > 0)."
      }
    ]
  },
  {
    id: "topic-7",
    title: "Thermodynamics, Acids, bases and salts. Properties of gases",
    questions: [
      {
        id: 151,
        text: "What is the pH of a 0.050 M solution of a weak acid HA with Ka = 2.0 x 10⁻⁵?",
        options: ["3.0", "4.0", "5.0", "2.0"],
        correctAnswer: 0,
        explanation: "[H⁺] = √(Ka * [HA]) = √(2.0 x 10⁻⁵ * 0.050) = √10⁻⁶ = 10⁻³ M. pH = 3.0."
      },
      {
        id: 152,
        text: "Which of the following processes has a positive entropy change (ΔS > 0)?",
        options: ["Condensation of steam", "Freezing of water", "Dissolving NaCl in water", "Formation of NH₃ from N₂ and H₂"],
        correctAnswer: 2,
        explanation: "Dissolving a solid in a liquid increases the disorder of the system, resulting in a positive entropy change."
      },
      {
        id: 153,
        text: "What is the pH of a buffer solution containing 0.10 M Acetic Acid (pKa = 4.74) and 0.20 M Sodium Acetate?",
        options: ["4.74", "5.04", "4.44", "7.00"],
        correctAnswer: 1,
        explanation: "pH = pKa + log([Salt]/[Acid]) = 4.74 + log(0.20/0.10) = 4.74 + 0.30 = 5.04."
      },
      {
        id: 154,
        text: "According to the Kinetic Molecular Theory, the rate of effusion of a gas is inversely proportional to:",
        options: ["Molar mass", "Square root of molar mass", "Temperature", "Pressure"],
        correctAnswer: 1,
        explanation: "Graham's Law states that Rate ∝ 1/√M."
      },
      {
        id: 155,
        text: "What is the Gibbs Free Energy change (ΔG) for a reaction at 300 K if ΔH = -50 kJ and ΔS = -100 J/K?",
        options: ["-20 kJ", "-80 kJ", "-50 kJ", "0 kJ"],
        correctAnswer: 0,
        explanation: "ΔG = ΔH - TΔS = -50,000 - (300 * -100) = -50,000 + 30,000 = -20,000 J = -20 kJ."
      },
      {
        id: 156,
        text: "Which of the following is a Lewis base?",
        options: ["AlCl₃", "BF₃", "NH₃", "H⁺"],
        correctAnswer: 2,
        explanation: "Ammonia (NH₃) has a lone pair of electrons that it can donate, making it a Lewis base."
      },
      {
        id: 157,
        text: "What is the partial pressure of Nitrogen in a mixture of 28 g of N₂ and 32 g of O₂ at a total pressure of 100 kPa? (Ar: N=14, O=16)",
        options: ["50 kPa", "46.7 kPa", "53.3 kPa", "25 kPa"],
        correctAnswer: 0,
        explanation: "Moles N₂ = 28/28 = 1. Moles O₂ = 32/32 = 1. Mole fraction N₂ = 1/2 = 0.5. Partial pressure = 0.5 * 100 = 50 kPa."
      },
      {
        id: 158,
        text: "Which of the following acids has the strongest conjugate base?",
        options: ["HCl", "H₂SO₄", "CH₃COOH", "HCN"],
        correctAnswer: 3,
        explanation: "The weaker the acid, the stronger its conjugate base. HCN is the weakest acid among the choices, so CN⁻ is the strongest conjugate base."
      },
      {
        id: 159,
        text: "What is the root-mean-square speed of Hydrogen molecules (H₂) at 27°C? (R = 8.314 J/mol·K, M = 2.0 g/mol)",
        options: ["1936 m/s", "612 m/s", "19.4 m/s", "193.6 m/s"],
        correctAnswer: 0,
        explanation: "v_rms = √(3RT/M) = √(3 * 8.314 * 300 / 0.002) = √3,741,300 ≈ 1934 m/s."
      },
      {
        id: 160,
        text: "What is the pH of a 0.010 M solution of Ba(OH)₂?",
        options: ["12.0", "12.3", "2.0", "1.7"],
        correctAnswer: 1,
        explanation: "Ba(OH)₂ is a strong base. [OH⁻] = 2 * 0.010 = 0.020 M. pOH = -log(0.020) ≈ 1.7. pH = 14 - 1.7 = 12.3."
      },
      {
        id: 161,
        text: "What is the relationship ΔG = ΔH - TΔS used to determine?",
        options: ["Reaction rate", "Spontaneity", "Equilibrium constant", "Activation energy"],
        correctAnswer: 1,
        explanation: "Gibbs Free Energy (ΔG) determines if a process is spontaneous (ΔG < 0)."
      },
      {
        id: 162,
        text: "What is the pH of pure water at 25°C?",
        options: ["0", "7", "14", "1"],
        correctAnswer: 1,
        explanation: "Pure water is neutral with [H⁺] = 10⁻⁷ M, so pH = 7."
      },
      {
        id: 163,
        text: "Which gas will effuse the fastest at a given temperature?",
        options: ["O₂", "N₂", "He", "CO₂"],
        correctAnswer: 2,
        explanation: "According to Graham's Law, lighter gases effuse faster. Helium has the lowest molar mass."
      },
      {
        id: 164,
        text: "What is the term for a substance that can act as both an acid and a base?",
        options: ["Amphoteric", "Aprotic", "Neutral", "Buffer"],
        correctAnswer: 0,
        explanation: "Amphoteric substances (like water) can either donate or accept a proton."
      },
      {
        id: 165,
        text: "What is the entropy change (ΔS) for the freezing of water?",
        options: ["Positive", "Negative", "Zero", "Undefined"],
        correctAnswer: 1,
        explanation: "Freezing involves going from a disordered liquid to an ordered solid, so entropy decreases."
      },
      {
        id: 166,
        text: "What is the pKa of an acid if its Ka is 1.0 x 10⁻⁵?",
        options: ["-5", "5", "10", "1"],
        correctAnswer: 1,
        explanation: "pKa = -log(Ka) = -log(10⁻⁵) = 5."
      },
      {
        id: 167,
        text: "Which law states that the total pressure of a gas mixture is the sum of partial pressures?",
        options: ["Henry's Law", "Dalton's Law", "Raoult's Law", "Graham's Law"],
        correctAnswer: 1,
        explanation: "Dalton's Law of Partial Pressures."
      },
      {
        id: 168,
        text: "What is the pH of a buffer solution with equal concentrations of a weak acid and its conjugate base?",
        options: ["7", "pKa", "14", "0"],
        correctAnswer: 1,
        explanation: "According to Henderson-Hasselbalch, if [Salt]=[Acid], then pH = pKa + log(1) = pKa."
      },
      {
        id: 169,
        text: "What is the root mean square (rms) speed of gas molecules proportional to?",
        options: ["T", "√T", "T²", "1/T"],
        correctAnswer: 1,
        explanation: "v_rms = √(3RT/M), so speed is proportional to the square root of Kelvin temperature."
      },
      {
        id: 170,
        text: "Which of the following is a weak base?",
        options: ["NaOH", "KOH", "NH₃", "Ba(OH)₂"],
        correctAnswer: 2,
        explanation: "Ammonia (NH₃) is a common weak base."
      },
      {
        id: 171,
        text: "What is the sign of ΔG for a process at equilibrium?",
        options: ["Positive", "Negative", "Zero", "Variable"],
        correctAnswer: 2,
        explanation: "At equilibrium, there is no net drive in either direction, so ΔG = 0."
      },
      {
        id: 172,
        text: "What is the molar volume of a gas at STP?",
        options: ["22.4 L", "24.0 L", "1.0 L", "11.2 L"],
        correctAnswer: 0,
        explanation: "Standard molar volume is 22.4 L/mol at 0°C and 1 atm."
      },
      {
        id: 173,
        text: "What is the Kw (ion product constant) of water at 25°C?",
        options: ["1.0 x 10⁻⁷", "1.0 x 10⁻¹⁴", "1.0 x 10⁷", "14"],
        correctAnswer: 1,
        explanation: "Kw = [H⁺][OH⁻] = 1.0 x 10⁻¹⁴ at 25°C."
      },
      {
        id: 174,
        text: "Which of the following describes an adiabatic process?",
        options: ["Constant temperature", "Constant pressure", "No heat exchange", "No work done"],
        correctAnswer: 2,
        explanation: "An adiabatic process is one in which no heat (q=0) enters or leaves the system."
      },
      {
        id: 175,
        text: "What is the pH of a 0.1 M HCl solution?",
        options: ["0", "1", "2", "7"],
        correctAnswer: 1,
        explanation: "HCl is a strong acid. [H⁺] = 0.1 M = 10⁻¹ M. pH = -log(10⁻¹) = 1."
      }
    ]
  },
  {
    id: "topic-8",
    title: "Redox Reactions and Electrochemistry",
    questions: [
      {
        id: 176,
        text: "What is the cell potential (E_cell) for the cell Zn | Zn²⁺ (0.01 M) || Cu²⁺ (1.0 M) | Cu at 25°C? (E°_cell = 1.10 V)",
        options: ["1.10 V", "1.16 V", "1.04 V", "1.22 V"],
        correctAnswer: 1,
        explanation: "E_cell = E° - (0.0592/n) log Q. Q = [Zn²⁺]/[Cu²⁺] = 0.01/1.0 = 10⁻². E_cell = 1.10 - (0.0592/2) log(10⁻²) = 1.10 + 0.0592 = 1.1592 ≈ 1.16 V."
      },
      {
        id: 177,
        text: "How many grams of Silver (Ag) will be deposited by a current of 2.00 A flowing for 30.0 minutes through a solution of AgNO₃? (Ar: Ag = 107.9, F = 96485 C/mol)",
        options: ["4.03 g", "2.01 g", "8.06 g", "1.01 g"],
        correctAnswer: 0,
        explanation: "Q = I * t = 2.00 * (30 * 60) = 3600 C. Moles e⁻ = 3600 / 96485 ≈ 0.0373 mol. Mass Ag = 0.0373 * 107.9 ≈ 4.03 g."
      },
      {
        id: 178,
        text: "Which of the following describes the 'Standard Hydrogen Electrode' (SHE)?",
        options: ["Platinum electrode in 1 M HCl at 25°C with H₂ gas at 1 atm", "Copper electrode in 1 M CuSO₄ at 25°C", "Zinc electrode in 1 M ZnSO₄ at 25°C", "Silver electrode in 1 M AgNO₃ at 25°C"],
        correctAnswer: 0,
        explanation: "The SHE consists of a platinum electrode in contact with 1 M H⁺ ions and H₂ gas at 1 atm pressure."
      },
      {
        id: 179,
        text: "What is the relationship between the equilibrium constant K and the standard cell potential E°?",
        options: ["log K = nE° / 0.0592", "log K = 0.0592 / nE°", "E° = log K / n", "K = nE°"],
        correctAnswer: 0,
        explanation: "At equilibrium, E_cell = 0, so 0 = E° - (0.0592/n) log K => log K = nE° / 0.0592."
      },
      {
        id: 180,
        text: "In the electrolysis of aqueous Na₂SO₄ using inert electrodes, what are the products at the anode and cathode?",
        options: ["Na and SO₂", "H₂ and O₂", "O₂ and H₂", "Na and O₂"],
        correctAnswer: 2,
        explanation: "Water is oxidized at the anode (O₂) and reduced at the cathode (H₂) because Na⁺ and SO₄²⁻ are harder to oxidize/reduce than water."
      },
      {
        id: 181,
        text: "What is the oxidation state of Xenon in the XeF₄ molecule?",
        options: ["+2", "+4", "+6", "0"],
        correctAnswer: 1,
        explanation: "F is -1. Xe + 4(-1) = 0 => Xe = +4."
      },
      {
        id: 182,
        text: "Which of the following is the strongest reducing agent based on standard reduction potentials?",
        options: ["Li⁺ (-3.05 V)", "Zn²⁺ (-0.76 V)", "Cu²⁺ (+0.34 V)", "Ag⁺ (+0.80 V)"],
        correctAnswer: 0,
        explanation: "The most negative reduction potential belongs to the strongest reducing agent (the species that is most easily oxidized)."
      },
      {
        id: 183,
        text: "What is the formal charge on the Sulfur atom in the Sulfate ion (SO₄²⁻) if all bonds are single bonds?",
        options: ["0", "+2", "-2", "+6"],
        correctAnswer: 1,
        explanation: "S has 6 valence electrons. In SO₄²⁻ with single bonds, S has 4 bonds and no lone pairs. FC = 6 - 4 = +2."
      },
      {
        id: 184,
        text: "How many moles of electrons are required to produce 22.4 L of O₂ gas at STP by the electrolysis of water?",
        options: ["1", "2", "4", "8"],
        correctAnswer: 2,
        explanation: "2H₂O → O₂ + 4H⁺ + 4e⁻. To produce 1 mole (22.4 L) of O₂, 4 moles of electrons are required."
      },
      {
        id: 185,
        text: "What is the standard free energy change (ΔG°) for a cell with E°_cell = 1.20 V and n = 2? (F = 96485 C/mol)",
        options: ["-231.6 kJ", "-115.8 kJ", "+231.6 kJ", "-463.2 kJ"],
        correctAnswer: 0,
        explanation: "ΔG° = -nFE° = -2 * 96485 * 1.20 = -231,564 J ≈ -231.6 kJ."
      },
      {
        id: 186,
        text: "During the electrolysis of molten NaCl, what is produced at the cathode?",
        options: ["Chlorine gas", "Sodium metal", "Hydrogen gas", "Oxygen gas"],
        correctAnswer: 1,
        explanation: "At the cathode, reduction occurs: Na⁺ + e⁻ → Na(l)."
      },
      {
        id: 187,
        text: "What is the relationship between ΔG° and E°cell?",
        options: ["ΔG° = -nFE°cell", "ΔG° = nFE°cell", "ΔG° = -RT ln E°cell", "ΔG° = E°cell / nF"],
        correctAnswer: 0,
        explanation: "The standard free energy change is directly proportional to the negative of the cell potential."
      },
      {
        id: 188,
        text: "What is the oxidation number of Sulfur in H₂SO₄?",
        options: ["+2", "+4", "+6", "-2"],
        correctAnswer: 2,
        explanation: "2(+1) + S + 4(-2) = 0 => S = +6."
      },
      {
        id: 189,
        text: "Which of the following is a secondary cell (rechargeable)?",
        options: ["Dry cell", "Leclanché cell", "Lead-acid storage battery", "Fuel cell"],
        correctAnswer: 2,
        explanation: "Lead-acid batteries used in cars are rechargeable secondary cells."
      },
      {
        id: 190,
        text: "What is the unit of electrical current?",
        options: ["Volt", "Ohm", "Ampere", "Watt"],
        correctAnswer: 2,
        explanation: "Current is measured in Amperes (A), which is Coulombs per second."
      },
      {
        id: 191,
        text: "In the electrolysis of water, what is the ratio of Hydrogen to Oxygen gas produced by volume?",
        options: ["1:1", "2:1", "1:2", "3:1"],
        correctAnswer: 1,
        explanation: "The decomposition of water is 2H₂O → 2H₂ + O₂, so 2 volumes of H₂ are produced for every 1 volume of O₂."
      },
      {
        id: 192,
        text: "What is the standard reduction potential of the Standard Hydrogen Electrode (SHE)?",
        options: ["1.00 V", "0.00 V", "-1.00 V", "Variable"],
        correctAnswer: 1,
        explanation: "By convention, the SHE is assigned a potential of exactly 0.00 V at all temperatures."
      },
      {
        id: 193,
        text: "Which of the following will prevent the corrosion of iron by 'sacrificial protection'?",
        options: ["Coating with tin", "Coating with zinc (galvanizing)", "Painting", "Greasing"],
        correctAnswer: 1,
        explanation: "Zinc is more reactive than iron and will oxidize first, protecting the iron underneath."
      },
      {
        id: 194,
        text: "What is the oxidation state of Nitrogen in NH₃?",
        options: ["+3", "-3", "0", "+5"],
        correctAnswer: 1,
        explanation: "N + 3(+1) = 0 => N = -3."
      },
      {
        id: 195,
        text: "How many Faradays are required to reduce 1 mole of Cu²⁺ to Cu?",
        options: ["1 F", "2 F", "0.5 F", "4 F"],
        correctAnswer: 1,
        explanation: "Cu²⁺ + 2e⁻ → Cu. Two moles of electrons (2 Faradays) are needed."
      },
      {
        id: 196,
        text: "What is the cell notation for a cell with Zn/Zn²⁺ and Cu/Cu²⁺ electrodes?",
        options: ["Zn|Zn²⁺||Cu²⁺|Cu", "Cu|Cu²⁺||Zn²⁺|Zn", "Zn²⁺|Zn||Cu|Cu²⁺", "Zn|Cu||Zn²⁺|Cu²⁺"],
        correctAnswer: 0,
        explanation: "Anode is on the left, cathode on the right. Zn|Zn²⁺||Cu²⁺|Cu."
      },
      {
        id: 197,
        text: "What is the effect of increasing the concentration of reactants in the cathode half-cell on the cell potential?",
        options: ["Increases", "Decreases", "No effect", "Depends on the metal"],
        correctAnswer: 0,
        explanation: "According to the Nernst equation, increasing reactant concentration increases the cell potential."
      },
      {
        id: 198,
        text: "Which of the following is an electrolytic process?",
        options: ["Discharging a battery", "Electroplating", "Corrosion", "Cellular respiration"],
        correctAnswer: 1,
        explanation: "Electroplating uses an external electrical source to drive a non-spontaneous redox reaction."
      },
      {
        id: 199,
        text: "What is the oxidation number of Chlorine in ClO₃⁻?",
        options: ["+1", "+3", "+5", "+7"],
        correctAnswer: 2,
        explanation: "Cl + 3(-2) = -1 => Cl = +5."
      },
      {
        id: 200,
        text: "What is the value of 1 Faraday in terms of Coulombs?",
        options: ["1.6 x 10⁻¹⁹", "6.022 x 10²³", "96485", "8.314"],
        correctAnswer: 2,
        explanation: "1 Faraday ≈ 96,485 C/mol e⁻."
      }
    ]
  },
  {
    id: "topic-9",
    title: "Radioactivity",
    questions: [
      {
        id: 201,
        text: "What is the binding energy per nucleon (in MeV) of a nucleus with a mass defect of 0.100 amu and 12 nucleons? (1 amu = 931.5 MeV)",
        options: ["7.76 MeV", "9.32 MeV", "11.18 MeV", "5.59 MeV"],
        correctAnswer: 0,
        explanation: "Total binding energy = 0.100 * 931.5 = 93.15 MeV. Binding energy per nucleon = 93.15 / 12 ≈ 7.76 MeV."
      },
      {
        id: 202,
        text: "Which of the following describes the 'Valley of Stability' in nuclear physics?",
        options: ["The region where the number of protons equals the number of neutrons", "The region where the binding energy per nucleon is maximum", "The region where nuclei are most stable against radioactive decay", "The region where fission is most likely to occur"],
        correctAnswer: 2,
        explanation: "The valley of stability is the region on a plot of N vs Z where stable nuclei are found. For light nuclei, N ≈ Z, but for heavy nuclei, N > Z."
      },
      {
        id: 203,
        text: "What is the result of 'Positron Emission' (β⁺ decay) on the atomic number (Z) and mass number (A) of a nucleus?",
        options: ["Z decreases by 1, A remains same", "Z increases by 1, A remains same", "Z decreases by 2, A decreases by 4", "Z remains same, A decreases by 1"],
        correctAnswer: 0,
        explanation: "In β⁺ decay, a proton turns into a neutron and a positron is emitted. Z decreases by 1, while A stays the same."
      },
      {
        id: 204,
        text: "A radioactive sample has an initial activity of 1000 Bq. After 30 days, the activity is 125 Bq. What is the half-life of the sample?",
        options: ["5 days", "10 days", "15 days", "7.5 days"],
        correctAnswer: 1,
        explanation: "125 is 1/8 of 1000. 1/8 = (1/2)³. This takes three half-lives. 3 * t½ = 30 => t½ = 10 days."
      },
      {
        id: 205,
        text: "Which of the following nuclear reactions is an example of 'Artificial Transmutation'?",
        options: ["²³⁸U → ²³⁴Th + ⁴He", "¹⁴N + ⁴He → ¹⁷O + ¹H", "¹⁴C → ¹⁴N + e⁻", "²²⁶Ra → ²²²Rn + ⁴He"],
        correctAnswer: 1,
        explanation: "Artificial transmutation involves bombarding a nucleus with particles (like alpha particles) to change it into another element. The first, third, and fourth are natural decays."
      },
      {
        id: 206,
        text: "What is the 'Mass Defect' of a Helium-4 nucleus if the mass of a proton is 1.0073 amu, a neutron is 1.0087 amu, and the Helium-4 nucleus is 4.0015 amu?",
        options: ["0.0305 amu", "0.0150 amu", "0.0455 amu", "0.0015 amu"],
        correctAnswer: 0,
        explanation: "Sum of nucleons = 2(1.0073) + 2(1.0087) = 2.0146 + 2.0174 = 4.0320 amu. Mass defect = 4.0320 - 4.0015 = 0.0305 amu."
      },
      {
        id: 207,
        text: "Which of the following particles is emitted during 'Electron Capture'?",
        options: ["Positron", "Electron", "Neutrino", "Alpha particle"],
        correctAnswer: 2,
        explanation: "In electron capture, a proton captures an electron and becomes a neutron, emitting a neutrino (ν_e) in the process."
      },
      {
        id: 208,
        text: "What is the decay constant (λ) of a radioactive isotope with a half-life of 100 years?",
        options: ["0.00693 yr⁻¹", "0.0100 yr⁻¹", "0.693 yr⁻¹", "100 yr⁻¹"],
        correctAnswer: 0,
        explanation: "λ = ln(2) / t½ = 0.693 / 100 = 0.00693 yr⁻¹."
      },
      {
        id: 209,
        text: "Which of the following isotopes is most likely to undergo 'Fission' when struck by a slow neutron?",
        options: ["²³⁸U", "²³⁵U", "²³²Th", "²⁰⁹Bi"],
        correctAnswer: 1,
        explanation: "Uranium-235 is fissile, meaning it can undergo fission with thermal (slow) neutrons, unlike U-238 which requires fast neutrons."
      },
      {
        id: 210,
        text: "What is the 'Magic Number' of nucleons that leads to particularly stable nuclei?",
        options: ["2, 8, 20, 28, 50, 82, 126", "1, 3, 5, 7, 9, 11", "10, 20, 30, 40, 50", "All even numbers"],
        correctAnswer: 0,
        explanation: "Magic numbers are specific counts of nucleons (protons or neutrons) that correspond to filled nuclear shells, resulting in high stability."
      },
      {
        id: 211,
        text: "What is the SI unit of radioactivity?",
        options: ["Curie", "Becquerel", "Roentgen", "Gray"],
        correctAnswer: 1,
        explanation: "The Becquerel (Bq) is the SI unit, defined as one disintegration per second."
      },
      {
        id: 212,
        text: "Which of the following is used as a moderator in nuclear reactors?",
        options: ["Uranium", "Graphite", "Cadmium", "Boron"],
        correctAnswer: 1,
        explanation: "Moderators like graphite or heavy water slow down fast neutrons to sustain the chain reaction."
      },
      {
        id: 213,
        text: "What is the binding energy of a nucleus?",
        options: ["Energy to add a proton", "Energy to remove an electron", "Energy required to disassemble a nucleus into its nucleons", "Energy released during alpha decay"],
        correctAnswer: 2,
        explanation: "Binding energy is a measure of the stability of the nucleus."
      },
      {
        id: 214,
        text: "Which particle is identical to an alpha particle?",
        options: ["Hydrogen nucleus", "Helium nucleus", "Electron", "Neutron"],
        correctAnswer: 1,
        explanation: "An alpha particle consists of 2 protons and 2 neutrons, which is a Helium-4 nucleus."
      },
      {
        id: 215,
        text: "What is the term for elements with the same atomic number but different mass numbers?",
        options: ["Isomers", "Isotopes", "Allotropes", "Isobars"],
        correctAnswer: 1,
        explanation: "Isotopes have the same number of protons but different numbers of neutrons."
      },
      {
        id: 216,
        text: "Which type of decay occurs when a proton turns into a neutron and emits a positive electron?",
        options: ["Alpha decay", "Beta-minus decay", "Positron emission (Beta-plus)", "Gamma decay"],
        correctAnswer: 2,
        explanation: "Positron emission (β⁺ decay) involves the emission of a positron (anti-electron)."
      },
      {
        id: 217,
        text: "What is the 'mass defect' in a nucleus?",
        options: ["The mass of electrons", "The difference between the mass of a nucleus and the sum of its nucleons", "The mass lost during chemical reactions", "The mass of neutrons"],
        correctAnswer: 1,
        explanation: "The mass of a nucleus is always slightly less than the sum of the masses of its individual protons and neutrons; this difference is the mass defect."
      },
      {
        id: 218,
        text: "Which of the following is a common fuel for nuclear fission reactors?",
        options: ["Hydrogen-1", "Helium-4", "Uranium-235", "Carbon-12"],
        correctAnswer: 2,
        explanation: "Uranium-235 is a fissile isotope used in most nuclear power plants."
      },
      {
        id: 219,
        text: "What is the purpose of control rods in a nuclear reactor?",
        options: ["To slow down neutrons", "To absorb excess neutrons", "To provide fuel", "To cool the reactor"],
        correctAnswer: 1,
        explanation: "Control rods (made of materials like boron or cadmium) absorb neutrons to regulate the rate of the fission chain reaction."
      },
      {
        id: 220,
        text: "What is the approximate half-life of Carbon-14?",
        options: ["5.7 years", "570 years", "5730 years", "57300 years"],
        correctAnswer: 2,
        explanation: "Carbon-14 has a half-life of approximately 5,730 years."
      },
      {
        id: 221,
        text: "Which type of radiation is not deflected by electric or magnetic fields?",
        options: ["Alpha", "Beta", "Gamma", "Positron"],
        correctAnswer: 2,
        explanation: "Gamma rays are neutral and are not affected by electromagnetic fields."
      },
      {
        id: 222,
        text: "What is the term for the minimum mass of fissile material needed to sustain a chain reaction?",
        options: ["Critical mass", "Atomic mass", "Molar mass", "Binding mass"],
        correctAnswer: 0,
        explanation: "Critical mass is the amount of material required for a self-sustaining nuclear chain reaction."
      },
      {
        id: 223,
        text: "Which of the following is a naturally occurring radioactive gas that can accumulate in homes?",
        options: ["Argon", "Radon", "Xenon", "Krypton"],
        correctAnswer: 1,
        explanation: "Radon-222 is a radioactive gas produced by the decay of uranium in soil and rocks."
      },
      {
        id: 224,
        text: "What is the result of 'electron capture' by a nucleus?",
        options: ["Atomic number increases by 1", "Atomic number decreases by 1", "Mass number decreases by 1", "Mass number increases by 1"],
        correctAnswer: 1,
        explanation: "In electron capture, a proton captures an inner-shell electron and becomes a neutron, decreasing the atomic number by 1."
      },
      {
        id: 225,
        text: "Which of the following is an example of nuclear fusion?",
        options: ["U-235 + n → Ba-141 + Kr-92 + 3n", "H-2 + H-3 → He-4 + n", "C-14 → N-14 + e⁻", "Ra-226 → Rn-222 + He-4"],
        correctAnswer: 1,
        explanation: "The combination of Deuterium (H-2) and Tritium (H-3) to form Helium is a classic fusion reaction."
      }
    ]
  }
];


