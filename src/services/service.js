import { StudentModel } from "../models/student-model.js"


export const createStudent = async (data) => {
    return await StudentModel.create(data);
}

export const getAllStudents = async () => {
    return await StudentModel.find();
}