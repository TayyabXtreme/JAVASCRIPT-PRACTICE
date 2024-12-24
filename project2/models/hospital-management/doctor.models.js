import mongoose from 'mongoose'

const docotorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    },
    qualification:{
        type:String,
        required:true
    },
    experienceInYears:{
        type:Number,
        required:true,
        default:0
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Hospital"
    }]


},{timestamps:true})


export const Doctor=mongoose.model("Doctor",docotorSchema)