require('dotenv').config();
const express = require('express');
const debug = require('debug')('app:server');

const app = express();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  debug(`🚀 Server listening in ${process.env.NODE_ENV} on port ${PORT}`);
});
