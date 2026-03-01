import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { db } from "../db";

export const authRouter = Router();
const SECRET_KEY = "your-secret-key-change-this-in-production"; // In a real app, use env var

// Sign Up
authRouter.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const stmt = db.prepare("INSERT INTO users (email, password, name) VALUES (?, ?, ?)");
      const info = stmt.run(email, hashedPassword, name || email.split('@')[0]);
      
      const token = jwt.sign({ id: info.lastInsertRowid, email }, SECRET_KEY, { expiresIn: "24h" });
      
      res.cookie("token", token, { httpOnly: true, secure: false }); // secure: false for dev/preview
      res.json({ user: { id: info.lastInsertRowid, email, name: name || email.split('@')[0] } });
    } catch (err: any) {
      if (err.code === 'SQLITE_CONSTRAINT_UNIQUE') {
        return res.status(400).json({ error: "Email already exists" });
      }
      throw err;
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Login
authRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const stmt = db.prepare("SELECT * FROM users WHERE email = ?");
    const user = stmt.get(email) as any;

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: "24h" });
    
    res.cookie("token", token, { httpOnly: true, secure: false });
    res.json({ user: { id: user.id, email: user.email, name: user.name } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Logout
authRouter.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

// Me (Check Auth)
authRouter.get("/me", (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(401).json({ error: "Not authenticated" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as any;
    const stmt = db.prepare("SELECT id, email, name FROM users WHERE id = ?");
    const user = stmt.get(decoded.id);
    
    if (!user) return res.status(401).json({ error: "User not found" });
    
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});
