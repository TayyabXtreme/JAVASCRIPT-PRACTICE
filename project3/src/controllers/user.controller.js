import {asyncHandler} from '../utils/asyncHandler.js'
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';
import uploadCloudinary from '../utils/cloudinay.js';
import { ApiResponse } from '../utils/ApiResponse.js';

const registerUser= asyncHandler(async(req,res)=>{
    const {fullName,email,username,password} = req.body
    console.log("email",email);

    if([fullName,email,username,password].some((field)=>field?.trim()==='')){
        throw new ApiError(400,"Please provide all the fields")
    }

    const existedUser=User.findOne({
        $or:[{email},{username}]
    })

    if(existedUser){
        throw new ApiError(409,"User with this email or username already exists")
    }

    const avatarLocalPath=req.files?.avatar[0]?.path;
    const coverImageLocalPath=req.files?.coverImage[0]?.path;

    if(!avatarLocalPath){
        throw new ApiError(400,"Please provide an avatar image")
    }
    const avatar= await uploadCloudinary(avatarLocalPath)
    const coverImage= await uploadCloudinary(coverImageLocalPath)

    if(!avatar){
        throw new ApiError(500,"Failed to upload avatar image")
    }

    const user=await User.create({
        fullName,
        avatar:avatar.url,
        coverImage:coverImage?.url || "",
        email,
        username:username.toLowerCase(),
        password
    })
    
    const createdUser=await User.findById(user.id).select("-password -refreshToken")

    if(!createdUser){
        throw new ApiError(500,"Failed to create user")
    }

    return res.status(201).json(
        new ApiResponse(201,"User created successfully",createdUser)
    )





})

export {registerUser}