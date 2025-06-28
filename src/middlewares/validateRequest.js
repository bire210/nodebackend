import { ApiError } from "./apiError.js";

export const validateRequest = (schema) => (req, res, next) => {
    try {
        req.body = schema.parse(req.body);
        next();
    } catch (err) {
        let errors = err.errors.map((element) => ({
            path: element.path[0],
            error: element.message
        }))
        throw new ApiError(400, errors);
    }
};