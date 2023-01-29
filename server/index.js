
// LIBRARY REQUIRES
require('dotenv').config(); // must be first
const express = require('express');

// LOCAL REQUIRES
const logger = require('./utilities/logger');
const router = require('./router');


// MAIN
const server = express();

server.use(logger);
server.use(express.json());
server.use(router);

server.listen(process.env.PORT, (error) => {
  if (error) {
    console.error(error);
    throw error;
  } else {
    console.clear();
    console.info('=== SERVER ON', '='.repeat(42));
    console.info(`SERVER: Listening at http://${process.env.SITE_URL}:${process.env.PORT}`);
  }
});
