// require("dotenv").config({path:'./.env'});
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({path:'./.env'});

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`App is running on port ${process.env.PORT}`)
    })
}).catch((err)=>{
    console.log("Error in connecting to the database",err)
    process.exit(1)

})
   





// import express from "express";
// const app=express(); 
// (async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
//         app.on("error",(error)=>{
//             console.log("Error in connecting to the database",error)
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`App is running on port ${process.env.PORT}`)
//         })

//     } catch (error) {
//         console.error("Error:",error)
//         throw error
//     }
// })()
