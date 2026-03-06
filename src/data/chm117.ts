import { Topic } from './questions';

export const chm117Topics: Topic[] = [
  {
    id: "chm117-exp1",
    title: "Exp 1: Density of Liquids and Solids",
    questions: [
      {
        id: 1001,
        text: "In the water displacement method for density determination, what is the primary reason for tilting the graduated cylinder and sliding the metal sample gently?",
        options: [
          "To prevent water splashing",
          "To minimize air bubble formation and prevent glass breakage",
          "To ensure the metal dissolves properly",
          "To increase the volume of water displaced"
        ],
        correctAnswer: 1,
        explanation: "Sliding the metal gently prevents breakage of the glass cylinder and helps avoid trapping air bubbles which would affect the volume reading."
      },
      {
        id: 1002,
        text: "If you plot Mass (y-axis) vs Volume (x-axis) for a pure substance, what does the slope of the best-fit line represent?",
        options: [
          "Volume",
          "Inverse Density",
          "Density",
          "Weight"
        ],
        correctAnswer: 2,
        explanation: "Since Density = Mass / Volume, the slope (Δy/Δx = Mass/Volume) represents the density of the substance."
      },
      {
        id: 1003,
        text: "When measuring volume in a graduated cylinder, how should the meniscus be read to minimize parallax error?",
        options: [
          "At the top of the curve, looking down",
          "At the bottom of the curve, at eye level",
          "At the bottom of the curve, looking up",
          "At the average level of the liquid"
        ],
        correctAnswer: 1,
        explanation: "For concave menisci (like water), the volume is read at the bottom of the curve at eye level to ensure accuracy and avoid parallax error."
      },
      {
        id: 1028,
        text: "An object has a mass of 12.50 g and displaces 2.5 mL of water. What is its density reported to the correct number of significant figures?",
        options: ["5 g/mL", "5.0 g/mL", "5.00 g/mL", "5.000 g/mL"],
        correctAnswer: 1,
        explanation: "Density = 12.50 g / 2.5 mL = 5.0 g/mL. The result is limited to 2 significant figures by the volume measurement."
      },
      {
        id: 1029,
        text: "Which of the following sets of units correctly represents density in the SI system vs common laboratory usage?",
        options: ["g/cm² (SI) and g/mL (Lab)", "kg/m³ (SI) and g/cm³ (Lab)", "kg/L (SI) and mg/mL (Lab)", "L/g (SI) and m³/kg (Lab)"],
        correctAnswer: 1,
        explanation: "The SI unit for density is kg/m³, but g/cm³ (or g/mL) is more commonly used in the laboratory for solids and liquids."
      },
      {
        id: 1046,
        text: "Is density an intensive or extensive property?",
        options: ["Intensive", "Extensive", "Both", "Neither"],
        correctAnswer: 0,
        explanation: "Density is an intensive property because it does not depend on the amount of substance present."
      },
      {
        id: 1047,
        text: "How does temperature generally affect the density of a liquid?",
        options: ["Density increases as temperature increases", "Density decreases as temperature increases", "Temperature has no effect", "Density becomes zero"],
        correctAnswer: 1,
        explanation: "As temperature increases, liquids generally expand (volume increases), causing density (mass/volume) to decrease."
      },
      {
        id: 1048,
        text: "An object will float in a liquid if:",
        options: ["Its density is greater than the liquid", "Its density is equal to the liquid", "Its density is less than the liquid", "Its mass is less than the liquid"],
        correctAnswer: 2,
        explanation: "Objects with a lower density than the fluid they are in will float."
      },
      {
        id: 1049,
        text: "What is the volume of a metal sample if the water level in a graduated cylinder rises from 20.0 mL to 25.5 mL?",
        options: ["5.5 mL", "45.5 mL", "20.0 mL", "25.5 mL"],
        correctAnswer: 0,
        explanation: "Volume displaced = Final Volume - Initial Volume = 25.5 - 20.0 = 5.5 mL."
      },
      {
        id: 1050,
        text: "Which of the following would introduce the largest error in a density determination?",
        options: ["Air bubbles trapped on the solid", "Reading the meniscus at eye level", "Drying the solid before weighing", "Using a precise balance"],
        correctAnswer: 0,
        explanation: "Air bubbles increase the apparent volume displaced, leading to a lower calculated density."
      },
      {
        id: 1051,
        text: "Specific gravity is defined as:",
        options: ["Density of substance / Density of water", "Density of water / Density of substance", "Mass x Gravity", "Weight / Volume"],
        correctAnswer: 0,
        explanation: "Specific gravity is the ratio of the density of a substance to the density of a reference substance (usually water)."
      },
      {
        id: 1052,
        text: "What are the units of Specific Gravity?",
        options: ["g/mL", "kg/m³", "Unitless", "N/m"],
        correctAnswer: 2,
        explanation: "Since it is a ratio of two densities, the units cancel out, making specific gravity unitless."
      },
      {
        id: 1053,
        text: "If a 50.0 g object displaces 10.0 mL of water, what is its density?",
        options: ["0.2 g/mL", "5.0 g/mL", "500 g/mL", "40 g/mL"],
        correctAnswer: 1,
        explanation: "Density = 50.0 g / 10.0 mL = 5.0 g/mL."
      },
      {
        id: 1054,
        text: "Why must the metal sample be dry before weighing?",
        options: ["To keep the balance clean", "To prevent reaction with air", "To ensure only the mass of the metal is measured", "To make it shiny"],
        correctAnswer: 2,
        explanation: "Any water on the metal would add to the mass, causing an error in the density calculation."
      },
      {
        id: 1055,
        text: "Which piece of glassware is most precise for measuring liquid volume?",
        options: ["Beaker", "Erlenmeyer Flask", "Graduated Cylinder", "Volumetric Pipette"],
        correctAnswer: 3,
        explanation: "Volumetric pipettes are designed to deliver a single, specific volume with very high precision."
      },
      {
        id: 1056,
        text: "If you use a wet metal sample for the volume displacement method, how is the density affected?",
        options: ["No effect", "Density will be calculated too high", "Density will be calculated too low", "Volume will be zero"],
        correctAnswer: 0,
        explanation: "If the metal is wet *before* putting it in water, the volume displacement is technically correct for the metal+water, but if you weighed it wet, mass is high. If you weighed dry but put it in wet, volume is same. Assuming standard procedure: weigh dry, then submerge. Being wet *before* submerging doesn't change displacement of the metal itself, but if drops cling to it, it might add slightly to volume. However, the question usually implies weighing wet vs dry. If weighed wet, mass is high -> Density high."
      },
      {
        id: 1057,
        text: "1 mL is equivalent to:",
        options: ["1 cm³", "1 mm³", "1 L", "1 m³"],
        correctAnswer: 0,
        explanation: "1 milliliter is exactly equivalent to 1 cubic centimeter (cc)."
      },
      {
        id: 1058,
        text: "Which metal would you expect to be the densest?",
        options: ["Aluminum (2.7 g/cm³)", "Iron (7.9 g/cm³)", "Lead (11.3 g/cm³)", "Gold (19.3 g/cm³)"],
        correctAnswer: 3,
        explanation: "Gold has the highest density among the choices."
      },
      {
        id: 1059,
        text: "Precision refers to:",
        options: ["How close a measurement is to the true value", "How close repeated measurements are to each other", "The number of decimal places", "The size of the instrument"],
        correctAnswer: 1,
        explanation: "Precision is a measure of the reproducibility of a set of measurements."
      },
      {
        id: 1060,
        text: "Accuracy refers to:",
        options: ["How close a measurement is to the true value", "How close repeated measurements are to each other", "The speed of measurement", "The cost of the instrument"],
        correctAnswer: 0,
        explanation: "Accuracy describes how close a measured value is to the actual or accepted value."
      },
      {
        id: 1061,
        text: "Calculate the % error if the experimental density is 8.90 g/cm³ and the theoretical density is 8.96 g/cm³.",
        options: ["0.67%", "0.06%", "1.5%", "99%"],
        correctAnswer: 0,
        explanation: "% Error = |(8.90 - 8.96) / 8.96| * 100 = |-0.06 / 8.96| * 100 ≈ 0.67%."
      },
      {
        id: 1062,
        text: "When using a balance, you should always:",
        options: ["Estimate the last digit", "Tare (zero) the balance before use", "Place chemicals directly on the pan", "Move the balance to a sunny spot"],
        correctAnswer: 1,
        explanation: "Taring the balance ensures that the reading starts at zero, accounting for any container or drift."
      },
      {
        id: 1063,
        text: "The density of water at 4°C is approximately:",
        options: ["0.5 g/mL", "1.0 g/mL", "2.0 g/mL", "100 g/mL"],
        correctAnswer: 1,
        explanation: "Water has a maximum density of 1.00 g/mL at 4°C."
      },
      {
        id: 1064,
        text: "If two objects have the same mass but different volumes, the one with the larger volume has:",
        options: ["Higher density", "Lower density", "Same density", "Zero density"],
        correctAnswer: 1,
        explanation: "Since D = m/V, a larger V (denominator) results in a lower density."
      },
      {
        id: 1065,
        text: "Why do we record all certain digits plus one estimated digit?",
        options: ["To waste time", "To show significant figures", "To confuse the reader", "It is not necessary"],
        correctAnswer: 1,
        explanation: "Significant figures reflect the precision of the measuring instrument."
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
      },
      {
        id: 1030,
        text: "Which technique uses a porous barrier to separate a solid from a liquid?",
        options: ["Decantation", "Filtration", "Sublimation", "Chromatography"],
        correctAnswer: 1,
        explanation: "Filtration uses a filter (porous barrier) to separate solids from liquids."
      },
      {
        id: 1031,
        text: "What is the solid remaining on the filter paper called?",
        options: ["Filtrate", "Residue", "Distillate", "Solute"],
        correctAnswer: 1,
        explanation: "The solid that remains on the filter paper is called the residue."
      },
      {
        id: 1066,
        text: "Sublimation is the process where a substance changes from:",
        options: ["Solid to Liquid", "Liquid to Gas", "Solid directly to Gas", "Gas to Solid"],
        correctAnswer: 2,
        explanation: "Sublimation is the phase transition from solid directly to gas without passing through the liquid phase."
      },
      {
        id: 1067,
        text: "Which component in a mixture of NaCl, NH₄Cl, and SiO₂ can be separated by sublimation?",
        options: ["NaCl", "NH₄Cl", "SiO₂", "None"],
        correctAnswer: 1,
        explanation: "Ammonium chloride (NH₄Cl) sublimes upon heating, allowing it to be separated from the other solids."
      },
      {
        id: 1068,
        text: "The liquid that passes through the filter paper is called the:",
        options: ["Residue", "Filtrate", "Precipitate", "Supernatant"],
        correctAnswer: 1,
        explanation: "The liquid collected after filtration is called the filtrate."
      },
      {
        id: 1069,
        text: "A mixture where the components are not uniformly distributed is called:",
        options: ["Homogeneous", "Heterogeneous", "Solution", "Alloy"],
        correctAnswer: 1,
        explanation: "Heterogeneous mixtures have non-uniform composition and distinct phases."
      },
      {
        id: 1070,
        text: "To calculate the percentage of a component in a mixture, you need:",
        options: ["Mass of component and total mass of mixture", "Volume of component only", "Density of mixture", "Temperature of mixture"],
        correctAnswer: 0,
        explanation: "% Component = (Mass of Component / Total Mass of Mixture) * 100."
      },
      {
        id: 1071,
        text: "If you start with 2.00g of mixture and recover 0.50g of Sand, what is the % Sand?",
        options: ["25%", "50%", "10%", "40%"],
        correctAnswer: 0,
        explanation: "(0.50 / 2.00) * 100 = 25%."
      },
      {
        id: 1072,
        text: "Why should you weigh the evaporating dish before adding the solution?",
        options: ["To calibrate the balance", "To determine the mass of the dish so it can be subtracted later", "To warm it up", "To clean it"],
        correctAnswer: 1,
        explanation: "You need the empty mass (tare) to calculate the mass of the solid residue after evaporation."
      },
      {
        id: 1073,
        text: "Which property allows sand and salt to be separated?",
        options: ["Magnetism", "Solubility", "Boiling point", "Density"],
        correctAnswer: 1,
        explanation: "The difference in solubility in water (salt is soluble, sand is not) is the basis for separation."
      },
      {
        id: 1074,
        text: "If the sum of the masses of recovered components is less than the original mass, what might have happened?",
        options: ["Matter was created", "Some sample was lost during transfer", "The balance is broken", "The humidity increased"],
        correctAnswer: 1,
        explanation: "Loss of material during mechanical transfers (spilling, sticking to glassware) leads to lower recovery."
      },
      {
        id: 1075,
        text: "If the sum of masses is greater than the original mass, what is a likely cause?",
        options: ["Sample was not dried completely", "Sample evaporated", "Mass was destroyed", "Gravity increased"],
        correctAnswer: 0,
        explanation: "Retained water (incomplete drying) adds extra mass to the final product."
      },
      {
        id: 1076,
        text: "Which of the following is a physical change?",
        options: ["Burning wood", "Rusting iron", "Dissolving salt in water", "Digesting food"],
        correctAnswer: 2,
        explanation: "Dissolving is a physical change because the chemical identity of the salt remains unchanged."
      },
      {
        id: 1077,
        text: "What safety precaution should be taken when heating an evaporating dish?",
        options: ["Touch it to check temperature", "Use crucible tongs", "Add cold water immediately", "Place it on paper"],
        correctAnswer: 1,
        explanation: "Hot porcelain looks like cold porcelain. Always use tongs to handle hot glassware/ceramics."
      },
      {
        id: 1078,
        text: "The process of a liquid turning into a gas is called:",
        options: ["Condensation", "Freezing", "Evaporation", "Deposition"],
        correctAnswer: 2,
        explanation: "Evaporation (or vaporization) is the phase change from liquid to gas."
      },
      {
        id: 1079,
        text: "A solution is an example of a:",
        options: ["Heterogeneous mixture", "Homogeneous mixture", "Compound", "Element"],
        correctAnswer: 1,
        explanation: "Solutions are homogeneous mixtures where the solute is uniformly distributed."
      },
      {
        id: 1080,
        text: "Which method would best separate iron filings from sand?",
        options: ["Filtration", "Magnetism", "Distillation", "Chromatography"],
        correctAnswer: 1,
        explanation: "Iron is magnetic, while sand is not."
      },
      {
        id: 1081,
        text: "What is the 'tare' function on a balance?",
        options: ["Turns it off", "Resets the reading to zero", "Changes units", "Calibrates it"],
        correctAnswer: 1,
        explanation: "Tare subtracts the weight of the container so you only weigh the contents."
      },
      {
        id: 1082,
        text: "Why is it important to let the evaporating dish cool before weighing?",
        options: ["Hot objects weigh more", "Convection currents from hot objects can affect the balance reading", "To prevent the balance from melting", "To let the salt crystallize"],
        correctAnswer: 1,
        explanation: "Hot objects create air currents that can buoy the pan, causing unstable and incorrect readings."
      },
      {
        id: 1083,
        text: "Which of the following is NOT a method of separation?",
        options: ["Filtration", "Distillation", "Combustion", "Chromatography"],
        correctAnswer: 2,
        explanation: "Combustion is a chemical reaction, not a physical separation method."
      },
      {
        id: 1084,
        text: "Extraction relies on differences in:",
        options: ["Boiling point", "Solubility in two immiscible phases", "Particle size", "Density"],
        correctAnswer: 1,
        explanation: "Extraction separates compounds based on their relative solubilities in two different immiscible liquids."
      },
      {
        id: 1085,
        text: "When filtering, the filter paper should be:",
        options: ["Dry", "Wet with solvent", "Crumpled", "Burned"],
        correctAnswer: 1,
        explanation: "Wetting the filter paper with the solvent helps it adhere to the funnel and prevents loss of precipitate."
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
      },
      {
        id: 1032,
        text: "What piece of glassware is used to deliver a precise volume of titrant?",
        options: ["Beaker", "Flask", "Burette", "Graduated Cylinder"],
        correctAnswer: 2,
        explanation: "A burette is designed to deliver variable, precise volumes of liquid."
      },
      {
        id: 1033,
        text: "In the titration of HCl with NaOH, the reaction is:",
        options: ["Redox", "Precipitation", "Neutralization", "Combustion"],
        correctAnswer: 2,
        explanation: "Acid + Base -> Salt + Water is a neutralization reaction."
      },
      {
        id: 1086,
        text: "What is the equivalence point?",
        options: ["When the indicator changes color", "When moles of acid equals moles of base (stoichiometrically)", "When the solution boils", "When pH is 0"],
        correctAnswer: 1,
        explanation: "The equivalence point is the theoretical point where the added titrant is chemically equivalent to the analyte."
      },
      {
        id: 1087,
        text: "KHP (Potassium Hydrogen Phthalate) is often used as a:",
        options: ["Indicator", "Primary Standard", "Strong Acid", "Solvent"],
        correctAnswer: 1,
        explanation: "KHP is a stable, high-purity solid used as a primary standard to standardize base solutions."
      },
      {
        id: 1088,
        text: "Before using a burette, it should be rinsed with:",
        options: ["Water only", "The solution to be filled in it", "Acid", "Base"],
        correctAnswer: 1,
        explanation: "Rinsing with the solution prevents dilution of the titrant by residual water."
      },
      {
        id: 1089,
        text: "If you overshoot the endpoint (add too much base), the calculated concentration of the acid will be:",
        options: ["Too high", "Too low", "Unaffected", "Zero"],
        correctAnswer: 0,
        explanation: "If volume of base is high, and M_acid * V_acid = M_base * V_base, then calculated M_acid will be artificially high."
      },
      {
        id: 1090,
        text: "Molarity (M) is defined as:",
        options: ["Moles of solute / Liters of solution", "Grams of solute / Liters of solution", "Moles of solute / Kg of solvent", "Moles of solute / Moles of solvent"],
        correctAnswer: 0,
        explanation: "Molarity is moles per liter."
      },
      {
        id: 1091,
        text: "What is the color of phenolphthalein in an acidic solution?",
        options: ["Pink", "Blue", "Colorless", "Yellow"],
        correctAnswer: 2,
        explanation: "Phenolphthalein is colorless in acidic and neutral solutions."
      },
      {
        id: 1092,
        text: "What is the color of phenolphthalein in a basic solution?",
        options: ["Pink", "Blue", "Colorless", "Yellow"],
        correctAnswer: 0,
        explanation: "Phenolphthalein turns pink in basic solutions (pH > 8.2)."
      },
      {
        id: 1093,
        text: "If 20.0 mL of 0.10 M NaOH is needed to neutralize 10.0 mL of HCl, what is the concentration of HCl?",
        options: ["0.10 M", "0.20 M", "0.05 M", "1.0 M"],
        correctAnswer: 1,
        explanation: "M1V1 = M2V2. (0.10 * 20) = M_acid * 10. M_acid = 2 / 10 = 0.20 M."
      },
      {
        id: 1094,
        text: "Which of the following is a diprotic acid?",
        options: ["HCl", "HNO₃", "H₂SO₄", "HC₂H₃O₂"],
        correctAnswer: 2,
        explanation: "Sulfuric acid (H₂SO₄) can donate two protons."
      },
      {
        id: 1095,
        text: "Why is it important to remove air bubbles from the burette tip?",
        options: ["They look bad", "They count as volume dispensed but contain no liquid", "They react with the base", "They change the temperature"],
        correctAnswer: 1,
        explanation: "If a bubble exits during titration, the volume reading changes but no titrant entered the flask, causing error."
      },
      {
        id: 1096,
        text: "A solution with pH 3 is:",
        options: ["Acidic", "Basic", "Neutral", "Salty"],
        correctAnswer: 0,
        explanation: "pH < 7 is acidic."
      },
      {
        id: 1097,
        text: "The reaction NaOH + HCl → NaCl + H₂O produces:",
        options: ["Salt and Hydrogen", "Salt and Water", "Acid and Base", "Precipitate"],
        correctAnswer: 1,
        explanation: "Neutralization produces a salt and water."
      },
      {
        id: 1098,
        text: "What is the molar mass of NaOH? (Na=23, O=16, H=1)",
        options: ["20 g/mol", "30 g/mol", "40 g/mol", "50 g/mol"],
        correctAnswer: 2,
        explanation: "23 + 16 + 1 = 40 g/mol."
      },
      {
        id: 1099,
        text: "To read a burette correctly, your eye must be:",
        options: ["Above the meniscus", "Below the meniscus", "Level with the meniscus", "Closed"],
        correctAnswer: 2,
        explanation: "Reading level with the meniscus avoids parallax error."
      },
      {
        id: 1100,
        text: "Which of the following is NOT a strong acid?",
        options: ["HCl", "H₂SO₄", "HNO₃", "HC₂H₃O₂ (Acetic Acid)"],
        correctAnswer: 3,
        explanation: "Acetic acid is a weak acid."
      },
      {
        id: 1101,
        text: "In the formula M₁V₁ = M₂V₂, what does V stand for?",
        options: ["Velocity", "Viscosity", "Volume", "Voltage"],
        correctAnswer: 2,
        explanation: "V stands for Volume."
      },
      {
        id: 1102,
        text: "Titration can be used to determine:",
        options: ["Density", "Concentration", "Boiling Point", "Color"],
        correctAnswer: 1,
        explanation: "Titration is primarily used to determine the unknown concentration of a solution."
      },
      {
        id: 1103,
        text: "What is the pH of a neutral solution at 25°C?",
        options: ["0", "1", "7", "14"],
        correctAnswer: 2,
        explanation: "pH 7 is neutral."
      },
      {
        id: 1104,
        text: "Which glassware is used to hold the analyte (solution being titrated)?",
        options: ["Burette", "Erlenmeyer Flask", "Graduated Cylinder", "Test Tube"],
        correctAnswer: 1,
        explanation: "An Erlenmeyer flask is typically used because its shape allows for swirling without splashing."
      },
      {
        id: 1105,
        text: "If you add water to the analyte flask during titration to wash down the sides, does it affect the moles of acid present?",
        options: ["Yes, it increases moles", "Yes, it decreases moles", "No, moles remain the same", "It stops the reaction"],
        correctAnswer: 2,
        explanation: "Adding water changes the volume/concentration but not the total number of moles of acid waiting to be neutralized."
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
      },
      {
        id: 1034,
        text: "What is the anhydrous form of a compound?",
        options: ["The form with water attached", "The form without water", "The liquid form", "The gaseous form"],
        correctAnswer: 1,
        explanation: "Anhydrous means 'without water'."
      },
      {
        id: 1035,
        text: "Which piece of equipment is used to cool a hot crucible in a dry environment?",
        options: ["Beaker", "Desiccator", "Oven", "Fume hood"],
        correctAnswer: 1,
        explanation: "A desiccator provides a dry environment for cooling to prevent re-absorption of moisture."
      },
      {
        id: 1106,
        text: "Gravimetric analysis relies on measuring:",
        options: ["Volume", "Mass", "Pressure", "Temperature"],
        correctAnswer: 1,
        explanation: "Gravimetric analysis involves determining the amount of an analyte based on mass measurements."
      },
      {
        id: 1107,
        text: "In the formula BaCl₂·2H₂O, what does the dot represent?",
        options: ["Multiplication", "Chemical bond to water molecules", "A mixture", "An impurity"],
        correctAnswer: 1,
        explanation: "The dot indicates that water molecules are chemically bound to the salt in a specific stoichiometric ratio."
      },
      {
        id: 1108,
        text: "If 2.0 g of hydrate produces 1.5 g of anhydrous salt, what is the mass of water lost?",
        options: ["0.5 g", "1.5 g", "2.0 g", "3.5 g"],
        correctAnswer: 0,
        explanation: "Mass of water = Mass of hydrate - Mass of anhydrous salt = 2.0 - 1.5 = 0.5 g."
      },
      {
        id: 1109,
        text: "Why should you not touch a clean crucible with your fingers?",
        options: ["It is hot", "Oils from your skin add mass", "It will break", "It is toxic"],
        correctAnswer: 1,
        explanation: "Fingerprints add a small but measurable mass that can affect precise gravimetric results."
      },
      {
        id: 1110,
        text: "What is the percent water in CuSO₄·5H₂O? (Molar mass = 249.7 g/mol, Water = 18.0 g/mol)",
        options: ["36.1%", "10.0%", "50.0%", "72.0%"],
        correctAnswer: 0,
        explanation: "Mass of 5 H₂O = 5 * 18.0 = 90.0 g. % Water = (90.0 / 249.7) * 100 ≈ 36.0%."
      },
      {
        id: 1111,
        text: "Which of the following is a hygroscopic substance?",
        options: ["One that repels water", "One that absorbs moisture from the air", "One that explodes in water", "One that is insoluble"],
        correctAnswer: 1,
        explanation: "Hygroscopic substances readily absorb water vapor from the atmosphere."
      },
      {
        id: 1112,
        text: "If the crucible lid is left off during heating, what error might occur?",
        options: ["The sample might splatter and be lost", "The sample will not heat up", "The crucible will crack", "No error"],
        correctAnswer: 0,
        explanation: "Rapid heating can cause the hydrate to pop or splatter, losing solid material and affecting the mass."
      },
      {
        id: 1113,
        text: "The empirical formula represents:",
        options: ["The simplest whole number ratio of atoms", "The actual number of atoms", "The structural arrangement", "The mass percent"],
        correctAnswer: 0,
        explanation: "The empirical formula is the simplest integer ratio of the elements in a compound."
      },
      {
        id: 1114,
        text: "If you heat the sample and the mass decreases, what is being lost?",
        options: ["Metal", "Salt", "Water vapor", "Glass"],
        correctAnswer: 2,
        explanation: "Heating a hydrate drives off water as steam/vapor."
      },
      {
        id: 1115,
        text: "What does 'heating to constant mass' mean?",
        options: ["Heating for 1 hour", "Heating until the mass doesn't change between weighings", "Heating until it glows red", "Heating until it melts"],
        correctAnswer: 1,
        explanation: "It confirms that the reaction (dehydration) is complete."
      },
      {
        id: 1116,
        text: "Which desiccant is commonly used in a desiccator?",
        options: ["Sand", "Calcium Chloride (CaCl₂)", "Water", "Salt"],
        correctAnswer: 1,
        explanation: "Anhydrous Calcium Chloride is a common drying agent."
      },
      {
        id: 1117,
        text: "If the anhydrous salt is hygroscopic and you weigh it while it's cold but exposed to air, the calculated % water will be:",
        options: ["Too high", "Too low", "Correct", "Zero"],
        correctAnswer: 1,
        explanation: "The salt re-absorbs water, making the final mass higher. Mass lost appears smaller, so % water is too low."
      },
      {
        id: 1118,
        text: "What is the molar mass of water (H₂O)?",
        options: ["16 g/mol", "17 g/mol", "18 g/mol", "20 g/mol"],
        correctAnswer: 2,
        explanation: "2(1.008) + 16.00 = 18.02 g/mol."
      },
      {
        id: 1119,
        text: "Which of the following is NOT a hydrate?",
        options: ["CuSO₄·5H₂O", "MgSO₄·7H₂O", "NaCl", "CoCl₂·6H₂O"],
        correctAnswer: 2,
        explanation: "Sodium Chloride (NaCl) does not typically form a hydrate structure under standard conditions."
      },
      {
        id: 1120,
        text: "The color change of CoCl₂·6H₂O (pink) to CoCl₂ (blue) upon heating is:",
        options: ["Reversible", "Irreversible", "Permanent", "Impossible"],
        correctAnswer: 0,
        explanation: "Adding water back to anhydrous CoCl₂ will turn it pink again."
      },
      {
        id: 1121,
        text: "To find the moles of anhydrous salt, you divide the mass of the salt by:",
        options: ["Molar mass of water", "Molar mass of the anhydrous salt", "Molar mass of the hydrate", "Avogadro's number"],
        correctAnswer: 1,
        explanation: "Moles = Mass / Molar Mass."
      },
      {
        id: 1122,
        text: "If a student spills some of the anhydrous solid after heating but before weighing, the calculated % water will be:",
        options: ["Too high", "Too low", "Unaffected", "Zero"],
        correctAnswer: 0,
        explanation: "The final mass will be lower than it should be. The difference (mass lost) will seem larger, so calculated water mass is higher."
      },
      {
        id: 1123,
        text: "Crucibles are typically made of:",
        options: ["Plastic", "Porcelain", "Wood", "Paper"],
        correctAnswer: 1,
        explanation: "Porcelain can withstand the high temperatures required for dehydration."
      },
      {
        id: 1124,
        text: "What is the ratio of moles of water to moles of salt in MgSO₄·7H₂O?",
        options: ["1:1", "1:7", "7:1", "1:5"],
        correctAnswer: 2,
        explanation: "There are 7 moles of water for every 1 mole of MgSO₄."
      },
      {
        id: 1125,
        text: "Which of the following is an example of an efflorescent substance?",
        options: ["One that loses water to the air spontaneously", "One that absorbs water", "One that melts", "One that burns"],
        correctAnswer: 0,
        explanation: "Efflorescent hydrates lose their water of hydration to the atmosphere at room temperature."
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
      },
      {
        id: 1036,
        text: "Which of the following compounds is generally insoluble in water?",
        options: ["NaNO₃", "KCl", "PbI₂", "NH₄Cl"],
        correctAnswer: 2,
        explanation: "Lead(II) iodide (PbI₂) is a yellow precipitate, while nitrates and alkali metal salts are soluble."
      },
      {
        id: 1037,
        text: "In the reaction BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl, what is the solid product?",
        options: ["BaCl₂", "Na₂SO₄", "BaSO₄", "NaCl"],
        correctAnswer: 2,
        explanation: "Barium sulfate (BaSO₄) is insoluble and forms a precipitate."
      },
      {
        id: 1126,
        text: "The general form of a double replacement reaction is:",
        options: ["A + B → AB", "AB → A + B", "A + BC → AC + B", "AB + CD → AD + CB"],
        correctAnswer: 3,
        explanation: "In double replacement, the cations and anions of two compounds exchange places."
      },
      {
        id: 1127,
        text: "Which of the following is a driving force for a double replacement reaction?",
        options: ["Formation of a solid", "Formation of a gas", "Formation of water", "All of the above"],
        correctAnswer: 3,
        explanation: "Precipitation, gas evolution, and neutralization (water formation) drive these reactions."
      },
      {
        id: 1128,
        text: "According to solubility rules, all nitrates (NO₃⁻) are:",
        options: ["Insoluble", "Soluble", "Gases", "Solids"],
        correctAnswer: 1,
        explanation: "All common metal nitrates are soluble in water."
      },
      {
        id: 1129,
        text: "What gas is produced when Na₂CO₃ reacts with HCl?",
        options: ["O₂", "H₂", "CO₂", "Cl₂"],
        correctAnswer: 2,
        explanation: "Carbonates react with acids to produce carbon dioxide gas, water, and a salt."
      },
      {
        id: 1130,
        text: "Which of the following pairs will NOT form a precipitate?",
        options: ["AgNO₃ + NaCl", "BaCl₂ + Na₂SO₄", "KCl + NaNO₃", "Pb(NO₃)₂ + KI"],
        correctAnswer: 2,
        explanation: "KCl + NaNO₃ → KNO₃ + NaCl. Both products are soluble, so no reaction occurs."
      },
      {
        id: 1131,
        text: "The net ionic equation for the reaction of HCl and NaOH is:",
        options: ["H⁺ + OH⁻ → H₂O", "Na⁺ + Cl⁻ → NaCl", "HCl + NaOH → NaCl + H₂O", "H⁺ + Cl⁻ → HCl"],
        correctAnswer: 0,
        explanation: "The formation of water from hydrogen and hydroxide ions is the net change."
      },
      {
        id: 1132,
        text: "What color is the precipitate PbI₂?",
        options: ["White", "Yellow", "Blue", "Red"],
        correctAnswer: 1,
        explanation: "Lead(II) Iodide is a distinctive yellow solid."
      },
      {
        id: 1133,
        text: "Which of the following hydroxides is soluble?",
        options: ["Fe(OH)₃", "Al(OH)₃", "NaOH", "Mg(OH)₂"],
        correctAnswer: 2,
        explanation: "Alkali metal hydroxides like NaOH are soluble."
      },
      {
        id: 1134,
        text: "What happens when you mix solutions of K₂CrO₄ and Pb(NO₃)₂?",
        options: ["Nothing", "A yellow precipitate forms", "Bubbles form", "It gets cold"],
        correctAnswer: 1,
        explanation: "Lead(II) Chromate (PbCrO₄) is a yellow precipitate."
      },
      {
        id: 1135,
        text: "A reaction that produces heat is called:",
        options: ["Endothermic", "Exothermic", "Precipitation", "Neutralization"],
        correctAnswer: 1,
        explanation: "Exothermic reactions release heat energy."
      },
      {
        id: 1136,
        text: "Which acid is found in vinegar?",
        options: ["Hydrochloric acid", "Sulfuric acid", "Acetic acid", "Nitric acid"],
        correctAnswer: 2,
        explanation: "Vinegar is a dilute solution of acetic acid (HC₂H₃O₂)."
      },
      {
        id: 1137,
        text: "Carbonates are generally insoluble EXCEPT for those of:",
        options: ["Group 1 metals and Ammonium", "Group 2 metals", "Transition metals", "Heavy metals"],
        correctAnswer: 0,
        explanation: "Alkali metal (Group 1) and ammonium carbonates are soluble."
      },
      {
        id: 1138,
        text: "What is the formula for the precipitate formed from FeCl₃ and NaOH?",
        options: ["FeOH", "Fe(OH)₂", "Fe(OH)₃", "NaCl"],
        correctAnswer: 2,
        explanation: "Iron(III) hydroxide forms: Fe³⁺ + 3OH⁻ → Fe(OH)₃."
      },
      {
        id: 1139,
        text: "Which of the following is a weak electrolyte?",
        options: ["NaCl", "HCl", "Acetic Acid", "NaOH"],
        correctAnswer: 2,
        explanation: "Acetic acid only partially dissociates in water."
      },
      {
        id: 1140,
        text: "The complete ionic equation shows:",
        options: ["Only the product", "All strong electrolytes dissociated into ions", "Only the precipitate", "The molecular formulas"],
        correctAnswer: 1,
        explanation: "It shows all soluble ionic compounds as separated ions."
      },
      {
        id: 1141,
        text: "H₂S is a gas with the smell of:",
        options: ["Roses", "Rotten eggs", "Chlorine", "Nothing"],
        correctAnswer: 1,
        explanation: "Hydrogen sulfide has a characteristic rotten egg odor."
      },
      {
        id: 1142,
        text: "Which of the following is a strong base?",
        options: ["NH₃", "KOH", "CH₃OH", "H₂O"],
        correctAnswer: 1,
        explanation: "Potassium hydroxide (KOH) is a strong base."
      },
      {
        id: 1143,
        text: "What is the precipitate in the reaction: CuSO₄ + 2NaOH → Cu(OH)₂ + Na₂SO₄?",
        options: ["CuSO₄", "NaOH", "Cu(OH)₂", "Na₂SO₄"],
        correctAnswer: 2,
        explanation: "Copper(II) hydroxide is the insoluble product (blue precipitate)."
      },
      {
        id: 1144,
        text: "Which of the following chlorides is insoluble?",
        options: ["NaCl", "KCl", "AgCl", "CaCl₂"],
        correctAnswer: 2,
        explanation: "Silver chloride is insoluble (along with Pb²⁺ and Hg₂²⁺ chlorides)."
      },
      {
        id: 1145,
        text: "Neutralization of an acid with a carbonate produces:",
        options: ["Salt only", "Salt and water", "Salt, water, and carbon dioxide", "Salt and hydrogen"],
        correctAnswer: 2,
        explanation: "Acid + Carbonate → Salt + H₂O + CO₂."
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
      },
      {
        id: 1038,
        text: "Will a reaction occur if Copper metal is placed in a solution of Zinc Sulfate?",
        options: ["Yes", "No", "Maybe", "Only if heated"],
        correctAnswer: 1,
        explanation: "No, because Copper is less active than Zinc and cannot displace it."
      },
      {
        id: 1039,
        text: "The activity series ranks metals based on their:",
        options: ["Density", "Melting point", "Reactivity", "Color"],
        correctAnswer: 2,
        explanation: "The activity series lists metals in order of decreasing reactivity."
      },
      {
        id: 1146,
        text: "The general form of a single replacement reaction is:",
        options: ["A + B → AB", "A + BC → AC + B", "AB + CD → AD + CB", "AB → A + B"],
        correctAnswer: 1,
        explanation: "An element replaces another element in a compound."
      },
      {
        id: 1147,
        text: "Which metal is the most active?",
        options: ["Gold", "Silver", "Copper", "Lithium"],
        correctAnswer: 3,
        explanation: "Lithium is at the top of the activity series (very reactive)."
      },
      {
        id: 1148,
        text: "Which metal is the least active?",
        options: ["Potassium", "Zinc", "Iron", "Gold"],
        correctAnswer: 3,
        explanation: "Gold is a noble metal and is very unreactive."
      },
      {
        id: 1149,
        text: "Oxidation is the:",
        options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"],
        correctAnswer: 1,
        explanation: "OIL RIG: Oxidation Is Loss, Reduction Is Gain."
      },
      {
        id: 1150,
        text: "Reduction is the:",
        options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"],
        correctAnswer: 0,
        explanation: "Reduction involves gaining electrons (charge goes down)."
      },
      {
        id: 1151,
        text: "In the reaction Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag, what is the oxidizing agent?",
        options: ["Cu", "AgNO₃", "Cu(NO₃)₂", "Ag"],
        correctAnswer: 1,
        explanation: "AgNO₃ contains Ag⁺ which gains electrons (is reduced), making it the oxidizing agent."
      },
      {
        id: 1152,
        text: "Which halogen is the most reactive?",
        options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        correctAnswer: 0,
        explanation: "Fluorine is the most reactive halogen and can displace other halogens."
      },
      {
        id: 1153,
        text: "Will Cl₂ react with NaBr?",
        options: ["Yes", "No", "Only at high pressure", "Only if frozen"],
        correctAnswer: 0,
        explanation: "Yes, Chlorine is more reactive than Bromine and will displace it: Cl₂ + 2NaBr → 2NaCl + Br₂."
      },
      {
        id: 1154,
        text: "What observation indicates a chemical reaction between Mg and HCl?",
        options: ["Color change to blue", "Bubbles of gas", "Formation of a solid", "Freezing"],
        correctAnswer: 1,
        explanation: "Magnesium reacts with HCl to produce Hydrogen gas bubbles."
      },
      {
        id: 1155,
        text: "Which metal can displace Hydrogen from cold water?",
        options: ["Sodium", "Iron", "Copper", "Gold"],
        correctAnswer: 0,
        explanation: "Alkali metals like Sodium are reactive enough to react with cold water."
      },
      {
        id: 1156,
        text: "Which metal reacts with steam but not cold water?",
        options: ["Sodium", "Iron", "Copper", "Gold"],
        correctAnswer: 1,
        explanation: "Iron reacts with steam to form iron oxide and hydrogen, but not with cold water."
      },
      {
        id: 1157,
        text: "The reaction 2Al + 3CuCl₂ → 2AlCl₃ + 3Cu is an example of:",
        options: ["Synthesis", "Decomposition", "Single Replacement", "Double Replacement"],
        correctAnswer: 2,
        explanation: "Aluminum replaces Copper in the compound."
      },
      {
        id: 1158,
        text: "In a redox reaction, the number of electrons lost must equal:",
        options: ["The number of protons", "The number of electrons gained", "Zero", "The atomic mass"],
        correctAnswer: 1,
        explanation: "Charge is conserved; electrons lost by one species are gained by another."
      },
      {
        id: 1159,
        text: "What is the oxidation state of Cu in Cu(NO₃)₂?",
        options: ["0", "+1", "+2", "+3"],
        correctAnswer: 2,
        explanation: "Nitrate is -1, so Copper must be +2 to balance the two nitrates."
      },
      {
        id: 1160,
        text: "Which of the following metals will NOT react with HCl?",
        options: ["Mg", "Zn", "Fe", "Ag"],
        correctAnswer: 3,
        explanation: "Silver (Ag) is below Hydrogen in the activity series and cannot displace it from acids."
      },
      {
        id: 1161,
        text: "Corrosion of iron (rusting) is an example of:",
        options: ["Reduction only", "Oxidation only", "Redox reaction", "Precipitation"],
        correctAnswer: 2,
        explanation: "Rusting involves the oxidation of iron and reduction of oxygen."
      },
      {
        id: 1162,
        text: "What is the color of the solution containing Cu²⁺ ions?",
        options: ["Colorless", "Blue", "Red", "Yellow"],
        correctAnswer: 1,
        explanation: "Copper(II) ions in aqueous solution are typically blue."
      },
      {
        id: 1163,
        text: "Which equation represents the reduction of Silver ions?",
        options: ["Ag → Ag⁺ + e⁻", "Ag⁺ + e⁻ → Ag", "Ag²⁺ + 2e⁻ → Ag", "Ag + e⁻ → Ag⁻"],
        correctAnswer: 1,
        explanation: "Reduction is gain of electrons: Ag⁺ gains 1 electron to become neutral Ag."
      },
      {
        id: 1164,
        text: "Why does aluminum not corrode as fast as iron?",
        options: ["It is less reactive", "It forms a protective oxide layer", "It is a noble metal", "It is magnetic"],
        correctAnswer: 1,
        explanation: "Aluminum forms a tough, impermeable oxide coating that protects the metal underneath."
      },
      {
        id: 1165,
        text: "In the reaction Zn + CuSO₄, the blue color of the solution:",
        options: ["Intensifies", "Fades", "Turns red", "Turns black"],
        correctAnswer: 1,
        explanation: "As Cu²⁺ ions (blue) are replaced by Zn²⁺ ions (colorless), the blue color fades."
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
      },
      {
        id: 1040,
        text: "Which color of visible light has the highest energy?",
        options: ["Red", "Green", "Blue", "Violet"],
        correctAnswer: 3,
        explanation: "Violet light has the shortest wavelength and therefore the highest energy."
      },
      {
        id: 1041,
        text: "An electron moving from a higher energy level to a lower one:",
        options: ["Absorbs a photon", "Emits a photon", "Gains mass", "Loses charge"],
        correctAnswer: 1,
        explanation: "Energy is released in the form of a photon when an electron falls to a lower energy level."
      },
      {
        id: 1166,
        text: "What is the ground state of a hydrogen atom?",
        options: ["n=1", "n=2", "n=0", "n=infinity"],
        correctAnswer: 0,
        explanation: "The ground state is the lowest possible energy level, which is n=1 for hydrogen."
      },
      {
        id: 1167,
        text: "A continuous spectrum is produced by:",
        options: ["A hot, dense solid or gas under high pressure", "A hot, low density gas", "A cold gas", "A laser"],
        correctAnswer: 0,
        explanation: "Incandescent solids (like a light bulb filament) or dense gases produce a continuous spectrum (rainbow)."
      },
      {
        id: 1168,
        text: "A line spectrum is characteristic of:",
        options: ["Solids", "Liquids", "Excited atoms in the gas phase", "Black holes"],
        correctAnswer: 2,
        explanation: "Each element produces a unique line spectrum when its gaseous atoms are excited."
      },
      {
        id: 1169,
        text: "The wavelength of red light is approximately:",
        options: ["400 nm", "500 nm", "650 nm", "800 nm"],
        correctAnswer: 2,
        explanation: "Red light is at the longer wavelength end of the visible spectrum, around 650-700 nm."
      },
      {
        id: 1170,
        text: "Which equation relates energy and frequency?",
        options: ["E = mc²", "E = hν", "E = 1/2 mv²", "PV = nRT"],
        correctAnswer: 1,
        explanation: "Planck's equation E = hν relates the energy of a photon to its frequency."
      },
      {
        id: 1171,
        text: "The transition from n=3 to n=2 in Hydrogen produces which color?",
        options: ["Red", "Blue-green", "Violet", "Yellow"],
        correctAnswer: 0,
        explanation: "This is the H-alpha line (656 nm), which is red."
      },
      {
        id: 1172,
        text: "The transition from n=4 to n=2 in Hydrogen produces which color?",
        options: ["Red", "Blue-green (Teal)", "Violet", "Orange"],
        correctAnswer: 1,
        explanation: "This is the H-beta line (486 nm), which appears blue-green."
      },
      {
        id: 1173,
        text: "What happens when white light passes through a prism?",
        options: ["It disappears", "It is dispersed into a continuous spectrum", "It turns black", "It becomes a laser"],
        correctAnswer: 1,
        explanation: "Refraction separates the wavelengths of white light into a rainbow (continuous spectrum)."
      },
      {
        id: 1174,
        text: "The Rydberg equation is used to calculate:",
        options: ["The speed of light", "The wavelengths of spectral lines", "The mass of an electron", "The density of gas"],
        correctAnswer: 1,
        explanation: "The Rydberg equation predicts the wavelengths of the spectral lines of hydrogen."
      },
      {
        id: 1175,
        text: "Which series of hydrogen lines falls in the Ultraviolet (UV) region?",
        options: ["Lyman series", "Balmer series", "Paschen series", "Brackett series"],
        correctAnswer: 0,
        explanation: "The Lyman series involves transitions to n=1, resulting in high-energy UV photons."
      },
      {
        id: 1176,
        text: "Energy is:",
        options: ["Continuous", "Quantized", "Random", "Infinite"],
        correctAnswer: 1,
        explanation: "Energy levels in atoms are quantized, meaning they can only exist at specific discrete values."
      },
      {
        id: 1177,
        text: "What is the relationship between wavelength and frequency?",
        options: ["Directly proportional", "Inversely proportional", "No relationship", "Exponential"],
        correctAnswer: 1,
        explanation: "c = λν. As wavelength increases, frequency decreases."
      },
      {
        id: 1178,
        text: "The 'h' in E = hν stands for:",
        options: ["Hydrogen", "Heat", "Planck's constant", "Height"],
        correctAnswer: 2,
        explanation: "h is Planck's constant (6.626 x 10⁻³⁴ J·s)."
      },
      {
        id: 1179,
        text: "Which state has higher energy?",
        options: ["Ground state", "Excited state", "Solid state", "Liquid state"],
        correctAnswer: 1,
        explanation: "An excited state has higher potential energy than the ground state."
      },
      {
        id: 1180,
        text: "Why do different elements emit different colors of light?",
        options: ["They have different temperatures", "They have unique electron energy levels", "They have different nuclei", "They are different phases"],
        correctAnswer: 1,
        explanation: "The unique arrangement of energy levels in each element results in a unique set of transition energies (colors)."
      },
      {
        id: 1181,
        text: "The speed of light (c) is approximately:",
        options: ["3.00 x 10⁸ m/s", "340 m/s", "9.8 m/s²", "1.00 x 10⁶ m/s"],
        correctAnswer: 0,
        explanation: "Light travels at approx 3.00 x 10⁸ m/s in a vacuum."
      },
      {
        id: 1182,
        text: "Absorption spectra appear as:",
        options: ["Bright lines on a dark background", "Dark lines on a bright continuous background", "A solid color", "Invisible"],
        correctAnswer: 1,
        explanation: "Atoms absorb specific wavelengths from white light, leaving dark gaps (lines) in the spectrum."
      },
      {
        id: 1183,
        text: "The Paschen series involves transitions to which energy level?",
        options: ["n=1", "n=2", "n=3", "n=4"],
        correctAnswer: 2,
        explanation: "Paschen series transitions end at n=3 (Infrared region)."
      },
      {
        id: 1184,
        text: "Which model of the atom first introduced quantized energy levels?",
        options: ["Dalton", "Thomson", "Rutherford", "Bohr"],
        correctAnswer: 3,
        explanation: "Niels Bohr proposed that electrons orbit the nucleus in specific, quantized energy levels."
      },
      {
        id: 1185,
        text: "Neon signs work by:",
        options: ["Burning neon gas", "Passing electricity through neon gas to excite electrons", "Reflecting light", "Nuclear fusion"],
        correctAnswer: 1,
        explanation: "Electric discharge excites the neon atoms, which emit orange-red light as they return to lower energy states."
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
      },
      {
        id: 1042,
        text: "How many lone pairs are on the Oxygen atom in a water molecule (H₂O)?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 2,
        explanation: "Oxygen has 6 valence electrons; 2 are used in bonding with Hydrogen, leaving 4 electrons as 2 lone pairs."
      },
      {
        id: 1043,
        text: "Which element can have an expanded octet?",
        options: ["Nitrogen", "Oxygen", "Phosphorus", "Fluorine"],
        correctAnswer: 2,
        explanation: "Elements in Period 3 and below (like Phosphorus) can use d-orbitals to accommodate more than 8 electrons."
      },
      {
        id: 1186,
        text: "How many valence electrons does Oxygen (Group 16) have?",
        options: ["4", "5", "6", "7"],
        correctAnswer: 2,
        explanation: "Group 16 elements have 6 valence electrons."
      },
      {
        id: 1187,
        text: "Which element follows the Duet Rule?",
        options: ["Carbon", "Hydrogen", "Oxygen", "Sulfur"],
        correctAnswer: 1,
        explanation: "Hydrogen is stable with 2 electrons (like Helium), filling its 1s shell."
      },
      {
        id: 1188,
        text: "In the molecule N₂, how many electrons are shared between the nitrogen atoms?",
        options: ["2", "4", "6", "8"],
        correctAnswer: 2,
        explanation: "Nitrogen forms a triple bond, sharing 3 pairs (6 electrons)."
      },
      {
        id: 1189,
        text: "What is the total number of valence electrons in the Nitrate ion (NO₃⁻)?",
        options: ["23", "24", "25", "26"],
        correctAnswer: 1,
        explanation: "N(5) + 3*O(6) + 1(charge) = 5 + 18 + 1 = 24."
      },
      {
        id: 1190,
        text: "Which of the following compounds contains an ionic bond?",
        options: ["CO₂", "NaCl", "CH₄", "H₂O"],
        correctAnswer: 1,
        explanation: "NaCl is formed from a metal and a non-metal, creating an ionic bond."
      },
      {
        id: 1191,
        text: "Resonance structures are needed when:",
        options: ["A molecule vibrates", "A single Lewis structure cannot adequately describe the bonding", "The molecule is unstable", "The molecule is ionic"],
        correctAnswer: 1,
        explanation: "Resonance structures show delocalized electrons that cannot be represented by one static structure."
      },
      {
        id: 1192,
        text: "What is the formal charge on the Nitrogen atom in NH₄⁺?",
        options: ["-1", "0", "+1", "+2"],
        correctAnswer: 2,
        explanation: "N has 5 valence e-. In NH₄⁺, it has 4 bonds and 0 lone pairs. FC = 5 - (4 + 0) = +1."
      },
      {
        id: 1193,
        text: "Which element is an exception to the octet rule because it is stable with fewer than 8 electrons?",
        options: ["Carbon", "Boron", "Oxygen", "Fluorine"],
        correctAnswer: 1,
        explanation: "Boron is often stable with only 6 valence electrons (e.g., BF₃)."
      },
      {
        id: 1194,
        text: "How many total valence electrons are in CH₄?",
        options: ["8", "10", "12", "14"],
        correctAnswer: 0,
        explanation: "C(4) + 4*H(1) = 8."
      },
      {
        id: 1195,
        text: "A triple bond is ______ and ______ than a single bond.",
        options: ["Longer, Weaker", "Shorter, Stronger", "Longer, Stronger", "Shorter, Weaker"],
        correctAnswer: 1,
        explanation: "Triple bonds pull atoms closer (shorter) and require more energy to break (stronger)."
      },
      {
        id: 1196,
        text: "In the Lewis structure of Ozone (O₃), the central oxygen has a formal charge of:",
        options: ["0", "+1", "-1", "+2"],
        correctAnswer: 1,
        explanation: "Central O has 3 bonds (1 double, 1 single) and 1 lone pair. FC = 6 - (3 + 2) = +1."
      },
      {
        id: 1197,
        text: "Which of the following molecules has an odd number of valence electrons?",
        options: ["NO", "CO₂", "N₂", "CH₄"],
        correctAnswer: 0,
        explanation: "NO (Nitric Oxide) has 5 + 6 = 11 valence electrons."
      },
      {
        id: 1198,
        text: "Coordinate covalent bonds occur when:",
        options: ["Electrons are transferred", "Both shared electrons come from the same atom", "Electrons are shared equally", "No electrons are shared"],
        correctAnswer: 1,
        explanation: "In a coordinate bond (dative bond), one atom provides both electrons for the shared pair."
      },
      {
        id: 1199,
        text: "How many lone pairs are on the central Sulfur atom in SF₄?",
        options: ["0", "1", "2", "3"],
        correctAnswer: 1,
        explanation: "S has 6 valence e-. 4 are used for bonds. 2 remain as 1 lone pair."
      },
      {
        id: 1200,
        text: "Which atom is usually the central atom in a Lewis structure?",
        options: ["The most electronegative", "The least electronegative (except H)", "The largest", "The smallest"],
        correctAnswer: 1,
        explanation: "The least electronegative atom is typically central to share electrons with surrounding atoms."
      },
      {
        id: 1201,
        text: "What is the bond order of the C-O bonds in the Carbonate ion (CO₃²⁻)?",
        options: ["1", "2", "1.33", "1.5"],
        correctAnswer: 2,
        explanation: "There are 4 bonds distributed over 3 positions due to resonance. 4/3 = 1.33."
      },
      {
        id: 1202,
        text: "Which of the following is nonpolar?",
        options: ["HCl", "NH₃", "CH₄", "H₂O"],
        correctAnswer: 2,
        explanation: "Methane (CH₄) is symmetrical, so bond dipoles cancel out."
      },
      {
        id: 1203,
        text: "Electronegativity is:",
        options: ["Energy to remove an electron", "Ability of an atom to attract shared electrons", "Size of the atom", "Number of protons"],
        correctAnswer: 1,
        explanation: "Electronegativity measures the tendency of an atom to attract a bonding pair of electrons."
      },
      {
        id: 1204,
        text: "Which bond is the most polar?",
        options: ["H-H", "C-H", "O-H", "F-F"],
        correctAnswer: 2,
        explanation: "The electronegativity difference between O and H is the largest among the choices."
      },
      {
        id: 1205,
        text: "In HCN, the bond between C and N is a:",
        options: ["Single bond", "Double bond", "Triple bond", "Ionic bond"],
        correctAnswer: 2,
        explanation: "H-C≡N. Carbon forms a triple bond with Nitrogen to satisfy the octet rule."
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
      },
      {
        id: 1044,
        text: "What is the molecular geometry of CO₂?",
        options: ["Bent", "Linear", "Trigonal Planar", "Tetrahedral"],
        correctAnswer: 1,
        explanation: "CO₂ has two electron domains (double bonds) and no lone pairs on the central atom, making it linear."
      },
      {
        id: 1045,
        text: "VSEPR stands for:",
        options: [
          "Valence Shell Electron Pair Repulsion",
          "Variable Shell Electron Pair Repulsion",
          "Valence Shell Energy Pair Repulsion",
          "Valence State Electron Pair Repulsion"
        ],
        correctAnswer: 0,
        explanation: "VSEPR stands for Valence Shell Electron Pair Repulsion theory."
      },
      {
        id: 1206,
        text: "What is the electron domain geometry of water (H₂O)?",
        options: ["Linear", "Trigonal Planar", "Tetrahedral", "Bent"],
        correctAnswer: 2,
        explanation: "Water has 2 bonds and 2 lone pairs (4 domains), so the electron geometry is Tetrahedral (shape is Bent)."
      },
      {
        id: 1207,
        text: "What is the bond angle in a linear molecule like BeCl₂?",
        options: ["180°", "120°", "109.5°", "90°"],
        correctAnswer: 0,
        explanation: "Linear geometry corresponds to a bond angle of 180°."
      },
      {
        id: 1208,
        text: "Which molecule has a Trigonal Planar geometry?",
        options: ["CH₄", "NH₃", "BF₃", "H₂O"],
        correctAnswer: 2,
        explanation: "BF₃ has 3 bonding pairs and 0 lone pairs, forming a flat triangle."
      },
      {
        id: 1209,
        text: "The bond angle in a Trigonal Planar molecule is:",
        options: ["90°", "109.5°", "120°", "180°"],
        correctAnswer: 2,
        explanation: "3 domains spread out in a circle (360°) gives 120° angles."
      },
      {
        id: 1210,
        text: "What is the molecular geometry of PCl₅?",
        options: ["Tetrahedral", "Trigonal Bipyramidal", "Octahedral", "Square Planar"],
        correctAnswer: 1,
        explanation: "PCl₅ has 5 bonding pairs and 0 lone pairs."
      },
      {
        id: 1211,
        text: "What is the molecular geometry of SF₆?",
        options: ["Tetrahedral", "Trigonal Bipyramidal", "Octahedral", "Square Pyramidal"],
        correctAnswer: 2,
        explanation: "SF₆ has 6 bonding pairs and 0 lone pairs."
      },
      {
        id: 1212,
        text: "Lone pairs of electrons repel ______ than bonding pairs.",
        options: ["Less", "More", "The same", "None"],
        correctAnswer: 1,
        explanation: "Lone pairs take up more space and repel more strongly, compressing bond angles."
      },
      {
        id: 1213,
        text: "What is the approximate bond angle in Water (H₂O)?",
        options: ["109.5°", "120°", "104.5°", "180°"],
        correctAnswer: 2,
        explanation: "The two lone pairs compress the tetrahedral angle from 109.5° down to about 104.5°."
      },
      {
        id: 1214,
        text: "A molecule with 2 bonding pairs and 1 lone pair (like SO₂) has which shape?",
        options: ["Linear", "Bent", "Trigonal Planar", "Tetrahedral"],
        correctAnswer: 1,
        explanation: "3 electron domains (Trigonal Planar geometry) with 1 lone pair results in a Bent molecular shape."
      },
      {
        id: 1215,
        text: "Which geometry has bond angles of 90° and 120°?",
        options: ["Tetrahedral", "Trigonal Bipyramidal", "Octahedral", "Square Planar"],
        correctAnswer: 1,
        explanation: "Trigonal Bipyramidal has equatorial angles of 120° and axial angles of 90°."
      },
      {
        id: 1216,
        text: "What is the molecular geometry of XeF₄?",
        options: ["Tetrahedral", "See-Saw", "Square Planar", "Square Pyramidal"],
        correctAnswer: 2,
        explanation: "XeF₄ has 4 bonding pairs and 2 lone pairs (6 domains). Lone pairs are opposite, leaving a flat square."
      },
      {
        id: 1217,
        text: "A molecule with 4 bonding pairs and 1 lone pair (like SF₄) has which shape?",
        options: ["Tetrahedral", "See-Saw", "Square Planar", "Trigonal Pyramidal"],
        correctAnswer: 1,
        explanation: "5 domains total. The lone pair goes equatorial, creating a See-Saw shape."
      },
      {
        id: 1218,
        text: "What is the molecular geometry of ClF₃?",
        options: ["Trigonal Planar", "T-Shaped", "Trigonal Pyramidal", "Bent"],
        correctAnswer: 1,
        explanation: "5 domains (3 bonds, 2 lone pairs). Lone pairs go equatorial, leaving a T-shape."
      },
      {
        id: 1219,
        text: "Which of the following molecules is nonpolar due to symmetry?",
        options: ["NH₃", "H₂O", "CH₃Cl", "CCl₄"],
        correctAnswer: 3,
        explanation: "CCl₄ is tetrahedral and symmetrical, so the polar bond dipoles cancel out."
      },
      {
        id: 1220,
        text: "What is the molecular geometry of BrF₅?",
        options: ["Trigonal Bipyramidal", "Square Pyramidal", "Octahedral", "Pentagonal"],
        correctAnswer: 1,
        explanation: "6 domains (5 bonds, 1 lone pair) results in a Square Pyramidal shape."
      },
      {
        id: 1221,
        text: "The axial positions in a Trigonal Bipyramidal geometry are:",
        options: ["Top and Bottom", "Around the equator", "In the center", "Non-existent"],
        correctAnswer: 0,
        explanation: "Axial positions are vertical (top/bottom), while equatorial are in the horizontal plane."
      },
      {
        id: 1222,
        text: "Which molecule has a linear molecular geometry despite having 3 lone pairs?",
        options: ["H₂O", "XeF₂", "SF₂", "CO₂"],
        correctAnswer: 1,
        explanation: "XeF₂ has 2 bonds and 3 lone pairs (5 domains). The 3 lone pairs go equatorial, leaving the atoms linear."
      },
      {
        id: 1223,
        text: "What is the hybridization of the central atom in CH₄?",
        options: ["sp", "sp²", "sp³", "sp³d"],
        correctAnswer: 2,
        explanation: "4 electron domains corresponds to sp³ hybridization."
      },
      {
        id: 1224,
        text: "What is the hybridization of the central atom in PCl₅?",
        options: ["sp³", "sp³d", "sp³d²", "sp²"],
        correctAnswer: 1,
        explanation: "5 electron domains corresponds to sp³d hybridization."
      },
      {
        id: 1225,
        text: "A molecule with 2 bonding pairs and 0 lone pairs is always:",
        options: ["Polar", "Nonpolar (if atoms are same)", "Bent", "Tetrahedral"],
        correctAnswer: 1,
        explanation: "Linear geometry with identical outer atoms (e.g., BeCl₂, CO₂) is nonpolar."
      }
    ]
  }
];
