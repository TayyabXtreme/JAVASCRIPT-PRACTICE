
import mongoose from "mongoose";



const userSchema=new mongoose({
    username:{
        type:String,
        requeird:true,
        unique:true,
        lowercase:true
    },
    email:{
        type:String,
        requeird:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true,
    }

},{timestamps:true})





export const User=mongoose.model("User",userSchema)