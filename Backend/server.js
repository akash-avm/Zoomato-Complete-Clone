import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'; // ✅ Explicit dotenv import
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/UserRoute.js';

// Load environment variables
dotenv.config(); // ✅ Ensures .env variables are loaded

// App config
const app = express();
const port = process.env.PORT || 4000; // ✅ Allow PORT from .env

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
connectDB();

// API endpoints
app.use("/api/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);

// Test API Route
app.get("/", (req, res) => {
    res.send("API Working");
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server started on http://localhost:${port}`);
    console.log("JWT_SECRET:", process.env.JWT_SECRET || "Not found"); // ✅ Debugging
});
