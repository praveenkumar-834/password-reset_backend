import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import connectDB from "./config/db.js"
import authRoutes from "./routes/authRoutes.js"
import dns from "node:dns/promises";
dns.setServers(["1.1.1.1"]);
dotenv.config()

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth",authRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
console.log("Server running ${PORT}")
})