const express = require('express');
const {
  getComments,
  addComment,
  updateComment,
  deleteComment,
} = require('../controllers/comments.controller');

const router = express.Router({ mergeParams: true });

router.route('/').get(getComments).post(addComment);

router.route('/:id').put(updateComment).delete(deleteComment);

module.exports = router;
