const mongoose = require('mongoose');
const log = require('../middleware/logger');

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

// cascade delete comments when a user is deleted
userSchema.pre('remove', async function (next) {
  log.info(`Comments deleted for userId ${this._id}`);
  await this.model('Comment').deleteMany({ userId: this._id });
  next();
});

// create the model
const User = mongoose.model('User', userSchema);

module.exports = User;
