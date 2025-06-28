class ApiError extends Error {
    constructor(statusCode, error) {
        super(typeof error === "string" ? error : error?.message || "Unknown Error");

        this.name = statusCode == 400 ? "Validation Error" : "Api Error";
        this.statusCode = statusCode;
        this.success = false;

        this.error =
            typeof error === "string"
                ? error
                : error instanceof Error
                    ? error.message
                    : error;
    }
}

export { ApiError };