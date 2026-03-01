import { GoogleGenAI, Type } from "@google/genai";
import { Question } from "../data/questions";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });

export async function generateQuestions(topicTitle: string, count: number = 5): Promise<Question[]> {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `Generate ${count} advanced, university-level multiple-choice questions about "${topicTitle}" for a first-year university chemistry quiz. 
    The questions should be challenging and require deep understanding of the concepts, including quantitative problems where appropriate.
    Each question must have 4 options and exactly one correct answer.
    Provide a detailed explanation for the correct answer, including any necessary calculations or reasoning.
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
    console.error("Failed to parse AI generated questions:", error);
    return [];
  }
}
