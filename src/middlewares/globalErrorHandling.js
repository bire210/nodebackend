import { ApiError } from "./apiError.js";
export const globalErrorHandling = (err, req, res, next) => {
    res.status(err?.statusCode || 500).json(new ApiError(err?.statusCode || 500, err?.error || "Server error"))
}