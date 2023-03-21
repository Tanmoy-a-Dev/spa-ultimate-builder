const { ValidationError, DatabaseError } = require('sequelize');
// const {
//   BadRequestError,
//   UnauthorizedError,
//   ForbiddenError,
//   NotFoundError,
//   ConflictError,
//   ServiceUnavailableError,
//   InternalServerError,
//   CustomErr,
// } = require('../../../helpers/customErrors');
const winston = require('winston');
const CustomError = require('../../../helpers/customErrors');

const logger = winston.createLogger({
  level: 'error',
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: 'error.log' })],
});

const errorHandler = (err, req, res, next) => {
  logger.error(err);
  console.error(err);
  if (err instanceof CustomError) {
    res
      .status(err.statusCode)
      .json({ success: false, errorType: 'Custom Error', msg: err.message });
  } else {
    // Handle other errors
    res.status(500).json({
      errorType: 'Server Error',
      msg: 'Server Error',
    });
  }

  // if (err instanceof ValidationError) {
  //   // Handle Sequelize validation errors
  //   res.status(400).send(err.errors.map((error) => error.message).join('\n'));
  // } else if (err instanceof DatabaseError) {
  //   // Handle Sequelize database errors
  //   res.status(500).send('Database error!');
  // } else if (err instanceof BadRequestError) {
  //   // Handle BadRequestError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof UnauthorizedError) {
  //   // Handle UnauthorizedError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof ForbiddenError) {
  //   // Handle ForbiddenError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof NotFoundError) {
  //   // Handle NotFoundError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof ConflictError) {
  //   // Handle InternalServerError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof ServiceUnavailableError) {
  //   // Handle InternalServerError
  //   res.status(err.statusCode).send(err.message);
  // } else if (err instanceof InternalServerError) {
  //   // Handle InternalServerError
  //   res.status(err.statusCode).send(err.message);
  // }
};

module.exports = errorHandler;
