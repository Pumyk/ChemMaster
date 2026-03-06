import { GoogleGenAI } from "@google/genai";

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

let aiInstance: GoogleGenAI | null = null;

export const getGemini = () => {
  if (!aiInstance) {
    if (!GEMINI_API_KEY) {
      console.error("GEMINI_API_KEY is not set in the environment variables.");
      throw new Error("GEMINI_API_KEY is not set");
    }
    aiInstance = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  }
  return aiInstance;
};

// Deprecated: Use getGemini() instead to avoid top-level initialization errors
export const ai = new Proxy({} as GoogleGenAI, {
  get: (_target, prop) => {
    const instance = getGemini();
    return (instance as any)[prop];
  }
});
