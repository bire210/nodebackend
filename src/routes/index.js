import express from "express";
import { studentRoute } from "./student.js";

export const route = express.Router();

route.use("/student", studentRoute);
// route.use("/auth",auth.js)
