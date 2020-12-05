const express = require('express');
const {
  getComments,
  addComment,
  updateComment,
} = require('../controllers/comments.controller');

const router = express.Router({ mergeParams: true });

router.route('/').get(getComments).post(addComment);

router.route('/:id').put(updateComment);

module.exports = router;
