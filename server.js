import express from "express";
import userRouter from "./userRouter.js";
import connectDB from "./mongoDB_Connect.js";
import "dotenv/config.js"; // Load environment variables from .env file

const app = express();

connectDB(); // establishes connection to MongoDB

app.use(express.json()); // Middleware to parse JSON bodies

// http://localhost:3000/api/users
// For every request that comes to /api/users, it will be handled by userRouter
app.use("/api/users", userRouter);




//Global Error handling middleware handles all erorrs that occur in the backend
// This middleware catches errors from all routes and sends a response
app.use((err, req, res, next) => {
  console.error("Error coming from next()", err);
  res.status(err.status || 500).send(err.message || "Something went wrong!");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
