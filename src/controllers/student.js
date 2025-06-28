import { ApiError } from "../middlewares/apiError.js"
import { ApiResponse } from "../middlewares/apiResponse.js"
import * as StudentService from "../services/service.js"

export const createStudent = async (req, res, next) => {
    try {
        console.log(req.body)
        const createdStudent = await StudentService.createStudent(req.body)
        res.status(200).json(new ApiResponse(201, createdStudent, "Created"))
    } catch (error) {
        throw new ApiError(500, error);
        // next(error)
    }
}

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await StudentService.getAllStudents();
        res.status(200).json(new ApiResponse(200, students, "Success"))
    } catch (error) {
        throw new ApiError(500, error)
        // next(error);
    }
}