const debug = require('debug')('app:user-controller');
const User = require('../models/User.model');

exports.getUsers = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    data: users,
  });
};

exports.getUser = async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: 'User Not Found',
    });
  }

  res.status(200).json({
    success: true,
    data: user,
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
