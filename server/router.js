
// LIBRARY REQUIRES
const express = require('express');
const router = express.Router();

// NODE REQUIRES
const path = require('path');

// LOCAL REQUIRES
const controllers = require('./controllers');


// MAIN
router.use('/', express.static(path.join(__dirname, '../client/dist')));

module.exports = router;
