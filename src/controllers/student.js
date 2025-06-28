import * as StudentService from "../services/service.js"

export const createStudent = async (req, res) => {
    try {
        const createdStudent = await StudentService.createStudent(req.body)
        res.status(200).json({ status: true, data: createdStudent })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: false, error: "Not create" })
    }
}