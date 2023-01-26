
// LIBRARY REQUIRES
const express = require('express');
const router = express.Router();

// NODE REQUIRES
const path = require('path');

// LOCAL REQUIRES
const controllers = require('./controllers');


// GET CLIENT WEBSITE
router.use('/', express.static(path.join(__dirname, '../client/dist')));

// ROUTES
// R&R Routes
router.get('/meta/:id', controllers.getMetaData);
router.get('/ratings/:id', controllers.getRatings);
router.get('/reviews/:id', controllers.getReviews);
router.post('/post', controllers.postReview);
router.put('/helpfulpost',controllers.updateHelpfulPost);
router.put('/reportpost', controllers.reportPost);

// Related Products Routes
router.get('/related/:id', controllers.getRelatedProducts);

// Q&A Routes
router.get('/questions', controllers.getQuestions);

router.get('/answers', controllers.getAnswers);

router.post('/ask', controllers.postQuestions);

router.post('/answer', controllers.postAnswer);

router.put('/helpfulquestion', controllers.putHelpfulQuestion);

router.put('/reportquestion', controllers.reportQuestion);

router.put('/reportanswer', controllers.putReportAnswer);


// PRODUCT FOCUSED
router.get('/products', controllers.getAllProducts);
router.get('/products/:id', controllers.getOneProduct);
router.get('/products/:id/styles', controllers.getProductStyles);

// 404 CATCH AS FINAL ROUTE
router.get('*', controllers.return404);

module.exports = router;
