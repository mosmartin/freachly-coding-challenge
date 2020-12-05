const express = require('express');
const { getComments } = require('../controllers/comments.controller');

const router = express.Router({ mergeParams: true });

router.route('/').get(getComments);

module.exports = router;
