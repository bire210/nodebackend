

import express from "express";
import { createStudent } from "../controllers/student.js";

export const studentRoute = express.Router();
studentRoute.post("/", createStudent);


