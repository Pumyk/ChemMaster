import { Router } from "express";
import jwt from "jsonwebtoken";
import { db } from "../db";

export const quizRouter = Router();
const SECRET_KEY = "your-secret-key-change-this-in-production";

// Middleware to protect routes
const authenticate = (req: any, res: any, next: any) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as any;
    req.userId = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

// Save quiz result
quizRouter.post("/results", authenticate, (req: any, res: any) => {
  try {
    const { topicId, topicTitle, score, total, answers } = req.body;
    const stmt = db.prepare(`
      INSERT INTO quiz_results (user_id, topic_id, topic_title, score, total, answers)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    stmt.run(req.userId, topicId, topicTitle, score, total, JSON.stringify(answers));
    res.json({ message: "Result saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save result" });
  }
});

// Get quiz history
quizRouter.get("/history", authenticate, (req: any, res: any) => {
  try {
    const stmt = db.prepare(`
      SELECT * FROM quiz_results 
      WHERE user_id = ? 
      ORDER BY created_at DESC
    `);
    const history = stmt.all(req.userId);
    res.json({ history });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch history" });
  }
});
