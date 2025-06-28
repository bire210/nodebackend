import mongoose from "mongoose";

const { Schema } = mongoose;
const studentSchema = new Schema({
    name: {
        type: String,
    },
    age: Number,
    email: {
        type: String
    }
})

export const StudentModel = mongoose.model("Student", studentSchema);