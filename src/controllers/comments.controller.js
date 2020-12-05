const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User.model');
const Comment = require('../models/Comment.model');
const log = require('../middleware/logger');

exports.getComments = asyncHandler(async (req, res, next) => {
  const user = await User.findById(req.params.userId);

  if (!user) {
    log.error(
      `[User with id: ${req.params.userId} not found.] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    return next(
      new ErrorResponse(`User with id: ${req.params.userId} not found.`),
      404
    );
  }

  let query;

  if (req.params.userId) {
    query = Comment.find({ userId: req.params.userId }).select('-__v');
  }

  const comments = await query;

  res.status(200).json(comments);
});

exports.addComment = asyncHandler(async (req, res, next) => {
  req.body.userId = req.params.userId;

  const user = await User.findById(req.params.userId);

  if (!user) {
    log.error(
      `[User with id: ${req.params.userId} not found.] : [Hostname: ${req.hostname}] : [Remote IP Address: ${req.ip}] : [Resource URL: ${req.originalUrl}] : [Request Method: ${req.method}]`
    );

    return next(
      new ErrorResponse(`User with id: ${req.params.userId} not found.`),
      404
    );
  }

  const comment = await Comment.create(req.body);

  log.info(`Comment with id: ${comment._id} created.`);

  res.status(201).json(comment);
});
