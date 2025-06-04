import express from "express";
import userRouter from "./userRouter.js";
import  mongoDB_connect  from "./mongoDB_Connect.js";
import { requestLogger } from "./middleware/requestLogger.js"
import "dotenv/config.js"; // Load environment variables from .env file


const app = express();

mongoDB_connect(); // establishes connection to MongoDB

app.use(requestLogger); // Middleware to log requests

app.use(express.json()); // Middleware to parse JSON bodies

// http://localhost:3000/api/users
// For every request that comes to /api/users, it will be handled by userRouter
app.use("/api/users", userRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app;
