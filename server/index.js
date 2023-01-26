
// LIBRARY REQUIRES
require('dotenv').config(); // must be first
const express = require('express');

// LOCAL REQUIRES
// const authenticate = require('./utilities/authenticate.js');
const logger = require('./utilities/logger.js');
const router = require('./router.js');

// MAIN
const server = express();
server.use(logger);
// server.use(authenticate);
server.use(router);

server.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.clear();
    console.log('=== SERVER ON', '='.repeat(42));
    console.info(`SERVER: Listening at http://${process.env.SITE_URL}:${process.env.PORT}`);
  }
})
