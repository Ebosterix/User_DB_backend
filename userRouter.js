import express from "express";
import UserModel from "./models/UserModel.js";

const userRouter = express.Router();

/// GET  http://localhost:7777/api/users

/// GET method : retrieving resources (data)
userRouter.get("/", async (req, res, next) => {
  try {
    // Fetch all users from the database
    const allUser = await UserModel.find();
    res.status(200).send(allUser); // 200 means OK
  } catch (error) {
    next({ status: 500, message: error.message }); // Pass the error message to the next middleware
  }
  // If successful, send the list of users
  // If an error occurs, pass it to the next middleware
  //   next({status:500 , message:error.message}); // Pass the error message to the next middleware
  //   res.status(200).send(allUser); // 200 means OK

  const allUser = await UserModel.find();
  res.status(200).send(allUser);
});

/// POST method : creating new resource (new data)
///  POST     http://localhost:7777/api/users
userRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).send(newUser); //201 means successfully created
  } catch (error) {
    next({ status: 400, message: error.message }); // Pass the error message to the next middleware
  }
});

userRouter.get("/:id", async (req, res, next) => {
  try {
    const findUser = await UserModel.findById(req.params.id);
    if (!findUser) {
      return next({ status: 404, message: "User not found" });
    }
    res.status(200).send(findUser);
  } catch (error) {
    next({ status: 400, message: error.message });
  }
});

export default userRouter;
