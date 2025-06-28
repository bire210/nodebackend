import mongoose from "mongoose";
import { DB_URL } from "./enviromentConfig.js";

export const dbConnect=async()=>{
    const conectDb=await mongoose.connect(DB_URL)
}