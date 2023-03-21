class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.msg = message;
  }
}

module.exports = CustomError;
