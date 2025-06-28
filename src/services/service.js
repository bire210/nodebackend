import { StudentModel } from "../models/student-model.js"


export const createStudent = async (data) => {
    return await StudentModel.create(data);
}