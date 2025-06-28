import { z } from "zod";

export const studentSchema = z.object({
    name: z.string()
        .min(2, { message: "Name must be at least 2 characters long" })
        .nonempty({ message: "Name is required" }),

    age: z.number({
        invalid_type_error: "Age must be a number",
        required_error: "Age is required",
    }).min(1, { message: "Age must be a positive number" }),

    email: z.string()
        .email({ message: "Email must be valid" })
        .nonempty({ message: "Email is required" }),
});