
// LIBRARY REQUIRES
const express = require('express');
const router = express.Router();

// NODE REQUIRES
const path = require('path');

// LOCAL REQUIRES
const controllers = require('./controllers');


// SERVE THE CLIENT PAGE
router.use('/', express.static(path.join(__dirname, '../client/dist')));

// PASS THROUGH FOR AUTHENTICATION
router.get('/api/*', controllers.get);
router.post('/api/*', controllers.post);
router.put('/api/*', controllers.put);

// 404 PAGE for any unhandled routes
router.get('*', controllers.return404);

module.exports = router;
