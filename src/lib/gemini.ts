import { GoogleGenAI } from "@google/genai";

export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

if (!GEMINI_API_KEY) {
  console.error("GEMINI_API_KEY is not set in the environment variables.");
}

export const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });
