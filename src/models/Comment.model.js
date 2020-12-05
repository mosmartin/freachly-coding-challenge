const mongoose = require('mongoose');

const { Schema } = mongoose;

const commentSchema = new Schema({
  hashTags: [String],
  mentions: [String],
  text: String,
  timestamp: {
    type: Number,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

// create the model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
