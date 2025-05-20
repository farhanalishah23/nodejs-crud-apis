import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import route from "./Routes/userRoute.js";

const app = express()

app.use(bodyParser.json())
app.use("/api" ,route)

dotenv.config()

const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL).then(() => {
    console.log("Database Connected Successfully.")
    app.listen(PORT, () => {
        console.log(`Your Server is running on ${PORT}`)
    })
}).catch((err)=>{
        console.error("MongoDB connection failed:", err); 
    process.exit(1); 
})

