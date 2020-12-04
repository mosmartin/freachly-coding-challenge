const debug = require('debug')('app:user-controller');

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

exports.createUser = (req, res, next) => {
  res.status(201).json({
    success: true,
    message: 'User created',
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
