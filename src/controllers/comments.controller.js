const ErrorResponse = require('../utils/ErrorResponse');
const asyncHandler = require('../middleware/async');
const Comment = require('../models/Comment.model');
const log = require('../middleware/logger');

exports.getComments = asyncHandler(async (req, res, next) => {
  let query;

  if (req.params.userId) {
    query = Comment.find({ userId: req.params.userId });
  }

  const comments = await query;

  res.status(200).json({
    success: true,
    data: comments,
  });
});
