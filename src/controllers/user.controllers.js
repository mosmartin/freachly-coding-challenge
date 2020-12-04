const debug = require('debug')('app:user-controller');
const User = require('../models/User.model');

exports.getUsers = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Get all users',
  });
};

exports.getUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Get single users',
  });
};

exports.createUser = async (req, res, next) => {
  const user = await User.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
};

exports.updateUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'Update user',
  });
};

exports.deleteUser = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: 'User deleted',
  });
};
