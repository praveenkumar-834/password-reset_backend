import User from "../models/userModel.js"
import crypto from "crypto"
import bcrypt from "bcryptjs"
import sendEmail from "../utils/sendEmail.js"

export const forgotPassword = async(req,res)=>{

const {email}=req.body

const user = await User.findOne({email})

if(!user)
return res.status(404).json({message:"User not found"})

const token = crypto.randomBytes(32).toString("hex")

user.resetToken = token
user.resetTokenExpire = Date.now() + 10*60*1000

await user.save()

const link = `https://password-reset-frontend-rust.vercel.app/reset-password/${token}`

await sendEmail(email,link)

res.json({message:"Password reset link sent to email"})

}

export const resetPassword = async(req,res)=>{

const {token} = req.params
const {password} = req.body

const user = await User.findOne({
resetToken:token,
resetTokenExpire:{$gt:Date.now()}
})

if(!user)
return res.status(400).json({message:"Token expired"})

const hashed = await bcrypt.hash(password,10)

user.password = hashed
user.resetToken = undefined
user.resetTokenExpire = undefined

await user.save()

res.json({message:"Password updated successfully"})

}


// REGISTER USER
export const registerUser = async (req,res)=>{

try{

const {username,email,password} = req.body

const userExists = await User.findOne({email})

if(userExists){
return res.status(400).json({
message:"User already exists"
})
}

const hashedPassword = await bcrypt.hash(password,10)

const user = new User({
username,
email,
password:hashedPassword
})

await user.save()

res.status(201).json({
message:"User registered successfully"
})

}catch(error){

res.status(500).json({
error:error.message
})

}

}

// login user
export const loginUser = async (req,res)=>{

try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(404).json({
message:"User not found"
})
}

const isMatch = await bcrypt.compare(password,user.password)

if(!isMatch){
return res.status(400).json({
message:"Invalid password"
})
}

res.json({
message:"Login successful"
})

}catch(error){

res.status(500).json({
error:error.message
})

}

}
