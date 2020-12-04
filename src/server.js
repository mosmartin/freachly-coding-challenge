require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const debug = require('debug')('app:server');
const userRoute = require('../src/routes/user.routes');
const log = require('./middleware/logger');

// instantiate the app
const app = express();

// secure server by setting various HTTP headers.
app.use(helmet());

// handle cors errors
app.use(cors());

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount routes
app.use('/api/v1/users', userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  debug(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
  log.info(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
