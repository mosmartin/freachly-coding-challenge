const express = require('express');
const {
  getComments,
  addComment,
} = require('../controllers/comments.controller');

const router = express.Router({ mergeParams: true });

router.route('/').get(getComments).post(addComment);

module.exports = router;
    