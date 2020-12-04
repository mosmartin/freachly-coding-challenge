require('dotenv').config();
const express = require('express');
const debug = require('debug')('app:server');
const userRoute = require('../src/routes/user.routes');

// instantiate the app
const app = express();

// mount routes
app.use('/api/v1/users', userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  debug(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
