const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User.model');
const log = require('../middleware/logger');

exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await User.find().select('-__v');

  res.status(200).json(users);
});

exports.getUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id).select('-__v');

  if (!user) {
    log.error(
      `[User with id: ${req.params.id} not found.] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    return next(
      new ErrorResponse(`User with id: ${req.params.id} not found.`),
      404
    );
  }

  res.status(200).json(user);
});

exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);

  log.info(`User with id: ${user._id} created.`);

  res.status(201).json(user);
});

exports.updateUser = asyncHandler(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!user) {
    log.error(
      `[User with id: ${req.params.id} not found.] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    return next(
      new ErrorResponse(`User with id: ${req.params.id} not found.`),
      404
    );
  }

  res.status(200).json(user);
});

exports.deleteUser = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    log.error(
      `[User with id: ${req.params.id} not found.] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    return next(
      new ErrorResponse(`User with id: ${req.params.id} not found.`),
      404
    );
  }

  user.remove();

  log.info(`User with id: ${user._id} deleted.`);

  res.status(200).json({
    success: true,
  });
});
