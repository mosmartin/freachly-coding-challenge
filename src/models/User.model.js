const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  contact: {
    firstName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
  },
  profilePictureUrl: {
    type: String,
    unique: true,
    trim: true,
  },
  // createdatedAt: {
  //   type: Number,
  //   default: Date.now,
  // },
  updatedAt: {
    type: Number,
    default: Date.now,
  },
  username: {
    type: String,
    required: [true, 'Please add a username'],
    trim: true,
  },
});

// create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
