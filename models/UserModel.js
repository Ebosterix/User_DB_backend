import mongoose from "mongoose";

const { model, Schema } = mongoose;

/*const userSchema = new Schema({
  userName: {type: String,required: true, unique: true, trim: true},
  password: {
    type: String,
    required: true,
  },
});*/
const required = true
const unique = true
const trim = true


const addressSchema = new Schema({
   street :{type:String,required,trim},
   zip    :{type:Number,required},
   city   :{type:String,required,trim},
   country:{type:String,required,trim}
},{_id:false})



 const userSchema = new Schema({
    username:{type:String,required , unique,trim},
    password:{type:String,required},
    mainAddress:{type:addressSchema}
})




const UserModel = model("User", userSchema);

export default UserModel;
