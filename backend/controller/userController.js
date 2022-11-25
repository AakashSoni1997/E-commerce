const ErrorHander=require("../utils/errorhandler")
const catchAsyncErrors=require("../middleware/catchAsyncError")
const User=require("../models/userModels")
const sendToken = require("../utils/jwtToken")


///Register a User 

exports.registerUser=catchAsyncErrors( async (req,res,next)=>{
    const {name,email,password}=req.body 
    const user= await User.create({
        name,email,password,
        avatar:{
            public_id:"this is sample id",
            url:"profilepicUrl"
        }
    })
     
    sendToken(user,201,res)
})


//Login Users

exports.loginUser=catchAsyncErrors(async (req,res,next)=>{
const {email,password}=req.body;


/// Checking if User has given password and email both 

if(!email || !password){
return next(new ErrorHander("Please Enter email and password",400))
}
const user=await User.findOne({email}).select("+password")
if(!user){
return  next(new ErrorHander("Invaild email and password",401)) 
}

const isPasswordMatch=user.comparePassword(password)

if(!isPasswordMatch){
    return  next(new ErrorHander("Invaild email and password",401)) 
    }

sendToken(user,200,res)
    
})