require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const debug = require('debug')('app:server');
const errorHandler = require('./middleware/errors');
const dbConnect = require('../config/database');
const log = require('./middleware/logger');
const usersRoute = require('./routes/user.routes');

// instantiate the app
const app = express();

// connect to the database
dbConnect();

// secure server by setting various HTTP headers.
app.use(helmet());

// handle cors
app.use(cors());

// use the body parser middleware
app.use(express.json());

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routes
app.use('/api/v1/users', usersRoute);

// error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  debug(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
  log.info(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
