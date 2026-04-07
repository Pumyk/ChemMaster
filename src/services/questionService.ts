import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../data/questions";
import { getEngine } from "../lib/engine";

export async function generateQuestions(topicTitle: string, subject: string, count: number = 5, difficulty: 'Easy' | 'Medium' | 'Hard' = 'Medium'): Promise<Question[]> {
  const engine = getEngine();
  const difficultyPrompt = {
    'Easy': "Focus on basic definitions, simple concepts, and direct facts.",
    'Medium': "Focus on application of concepts, standard calculations, and understanding relationships.",
    'Hard': "Focus on complex multi-step problems, deep conceptual understanding, advanced calculations, and critical thinking. University-level."
  };

  const response = await engine.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate ${count} multiple-choice questions about "${topicTitle}" for a ${subject} quiz.
    The difficulty level should be: ${difficulty}.
    ${difficultyPrompt[difficulty]}
    Each question must have 4 options and exactly one correct answer.
    Provide a detailed explanation for the correct answer.
    Return the result as a JSON array of objects with the following structure:
    {
      "text": "The question text",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": 0, // index of the correct option (0-3)
      "explanation": "Detailed explanation"
    }`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING },
            options: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING } 
            },
            correctAnswer: { type: Type.INTEGER },
            explanation: { type: Type.STRING }
          },
          required: ["text", "options", "correctAnswer", "explanation"]
        }
      }
    }
  });

  try {
    const rawQuestions = JSON.parse(response.text || "[]");
    return rawQuestions.map((q: any, index: number) => ({
      ...q,
      id: Date.now() + index // Temporary unique ID
    }));
  } catch (error) {
    console.error("Failed to parse generated questions:", error);
    return [];
  }
}
