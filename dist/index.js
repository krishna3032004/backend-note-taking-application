import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.js";
import notesRoutes from "./routes/notes.js";
// Middleware
import { authMiddleware } from './middleware/auth.js';
const app = express();
app.use(cors({
    origin: process.env.FRONTEND_URL, // Yeh Vercel se URL uthayega
    credentials: true
}));
app.use(express.json());
// app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:3000" }));
app.use("/api/auth", authRoutes);
app.use("/api/notes", authMiddleware, notesRoutes);
const PORT = process.env.PORT || 4000;
const MONGO = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/notesapp";
mongoose.connect(MONGO).then(() => {
    console.log("Mongo connected");
    
}).catch(err => {
    console.error("Mongo connection error:", err);
});
