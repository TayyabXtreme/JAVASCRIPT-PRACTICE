import mongoose from "mongoose";


const orderItemSchema=new mongoose.Schema({
    proudctId: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
    },
    quantity:{
        type:Number,
        required:true
    }
    

})



const orderSchema=new mongoose.Schema(
    {
        orderPrice:{
            type:Number,
            required:true
        },
        customer:{
            type:mongoose.Schema.Type.ObjectId,
            ref:"User",
            required:true
        },
        orderItems:{
            type:[orderItemSchema]
        },
        address:{
            type:String,
            required:true
        },
        status:{
            type:String,
            enum:["PENDING","CANCELLED","DELIVERED"],
            default:"PENDING"
        }




    },
    {timestamps:true}
)


const Order=mongoose.model("Order",orderSchema)