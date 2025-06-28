

import express from "express";
import { createStudent, getAllStudents } from "../controllers/student.js";
import { studentSchema } from "../validations/studentValidator.js";
import { validateRequest } from "../middlewares/validateRequest.js";

export const studentRoute = express.Router();
studentRoute.post("/", validateRequest(studentSchema), createStudent);
studentRoute.get("/", getAllStudents);


