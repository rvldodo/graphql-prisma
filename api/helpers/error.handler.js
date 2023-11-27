class ErrorHandler extends Error {
  constructor(errorCode = 500, message = "Bad request", statusCode) {
    super(message);
    this.message = message;
    this.errorCode = errorCode;
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ErrorHandler;
