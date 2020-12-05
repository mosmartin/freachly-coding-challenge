const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/users.controller');

// resourse router
const commentRouter = require('./comment.routes');

const router = express.Router();

// re-route to comments router
router.use('/:userId/comments', commentRouter);

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
