const ErrorResponse = require('../utils/ErrorResponse');
const log = require('./logger');

const errorHandler = (err, req, res, next) => {
  let error = { ...err };

  error.message = err.message;

  // log the error
  // log.error(error.message);

  // mongoose bad object id
  if (err.name === 'CastError') {
    const message = `Resource with id: ${err.value} not found.`;

    log.error(
      `[${message}] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    error = new ErrorResponse(message, 404);
  }

  // mongoose duplicate key
  if (err.code === 11000) {
    const message = `Duplicate field value entered.`;

    log.error(
      `[${message}] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    error = new ErrorResponse(message, 400);
  }

  // mongoose validation errors
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);

    log.error(
      `[${message}] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    error = new ErrorResponse(message, 400);
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || 'Internal Server Error',
  });
};

module.exports = errorHandler;
