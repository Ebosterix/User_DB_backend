import mongoose from "mongoose";

const { model, Schema } = mongoose;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const UserModel = model("User", userSchema);

export default UserModel;
