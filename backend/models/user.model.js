import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  fullName:{
    type:String,
    required: true,
  },
  userName:{
    type:String,
    required:true,
    unique:true,
  },
  password:{
    type: String,
    required:true,
    minlength:6
  },
  email: {
    type:String,
    required:true,
    unique:true
  },
},{timestamps: true});

const User = mongoose.model("User", userSchema);

export default User