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

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
