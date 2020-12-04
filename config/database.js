const mongoose = require('mongoose');
const debug = require('debug')('app:database');
const log = require('../src/middleware/logger');

const dbConnect = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  debug(`👍 Connected to DB on ${conn.connection.host} host`);
  log.info(`👍 Connected to DB on ${conn.connection.host} host`);
};

module.exports = dbConnect;
