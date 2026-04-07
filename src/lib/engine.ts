import { GoogleGenAI } from "@google/genai";

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

let engineInstance: GoogleGenAI | null = null;

export const getEngine = () => {
  if (!engineInstance) {
    if (!GEMINI_API_KEY) {
      console.error("ENGINE_API_KEY is not set in the environment variables.");
      throw new Error("ENGINE_API_KEY is not set");
    }
    engineInstance = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  }
  return engineInstance;
};

// Deprecated: Use getEngine() instead to avoid top-level initialization errors
export const engine = new Proxy({} as GoogleGenAI, {
  get: (_target, prop) => {
    const instance = getEngine();
    return (instance as any)[prop];
  }
});
