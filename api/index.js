import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from "cors"

import authRoutes from "../routes/authRoutes.js"

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))

app.use("/api/auth",authRoutes)

export default app