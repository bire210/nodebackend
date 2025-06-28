
export class ApiError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.name = statusCode >= 500 ? "Internal Server Error" : "Api Error";
        this.statusCode = statusCode;
        this.error = error;
        this.success = false;
    }
}