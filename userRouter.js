import express from "express";
import UserModel from "./models/UserModel.js";
const userRouter = express.Router();
/// GET  http://localhost:7777/api/users

/// GET method : retrieving resources (data)
userRouter.get("/", async (req, res, next) => {
  const allUser = await UserModel.find();
  res.status(200).send(allUser);
});

/// POST method : creating new resource (new data)
///  POST     http://localhost:7777/api/users
userRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await UserModel.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

userRouter.get("/:id",async(req,res,next)=>{
        try {
                console.log(req.params)
                const findUser = await UserModel.findById(req.params.id)
                if(!findUser){
                        next({status:404,message:"user not found"})
                        return
                        
                }
                console.log(findUser)
                res.status(200).send(findUser) 
        } catch (error) {
              next({status:400,message:error.message})  
        }

})



/// deleteing specific user  using ":id" parameter in the URL
///DELETE http://localhost:7777/api/users/684004e966479e6af74d8d47
userRouter.delete("/:id",async(req,res,next)=>{


     try {
        
        const {id} = req.params
        const deleteUser = await  UserModel.findByIdAndDelete(id)
        if(!deleteUser){
                next({status:404,message:"the user was not found!"})
                return
        }  
    
        res.status(200).send({message:"user is deleted!"})
        console.log(deleteUser)
     } catch (error) {
         next({status:400,message:error.message})
     }


})

///DELETE ALL:  http://localhost:7777/api/users/
 userRouter.delete("/", async (req, res, next) => {
  try {
    const result = await UserModel.deleteMany({});
    res.status(200).json({ message: "All users deleted", deletedCount: result.deletedCount });
  } catch (error) {
    next(error);
  }
});




export default userRouter;
