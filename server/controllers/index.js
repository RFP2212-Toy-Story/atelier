
// LIBRARY REQUIRES
const axios = require('axios');

// LOCAL REQUIRES
const models = require('../models');


// CONTROLLERS
function getMetaData(req, res) {

  axios.get(API_URL, CONFIG_WITH_TOKEN) //
    .then(data => {
      console.log('Success in getting meta data!');
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('Error in getting meta data:', err);
      res.status(404).send(err);
    });
}

function getRatings(req, res) {
  .then(data => {
    console.log('Success in getting ratings!');
    res.status(200).send(data);
  })
  .catch(err => {
    console.log('Error in getting ratings: ', err);
    res.status(404).send(err);
  });
}

function getReviews(req, res) {
  .then(data => {
    console.log('Success in getting reviews!');
    res.status(200).send(data);
  })
    .catch(err => {
      console.log('Error in getting reviews: ', err);
      res.status(404).send(err);
    });
}

function postReview(req, res) {
  .then(data => {
  console.log('Success in posting review!');
  res.status(201).send(data);
})
    .catch(err => {
      console.log('Error in posting review: ', err);
      res.status(404).send(err);
    });
}

function updateHelpfulPost(req, res) {
  .then(data => {
  console.log('Marked as helpful');
  res.status(201).send(data);
})
    .catch(err => {
      console.log('Error in updating: ', err);
      res.status(404).send(data);
    });
}

function reportPost(req, res) {
  .then(data => {
  console.log('Review has been flagged');
  res.status(201).send(data);
})
    .end(data => {
      console.log('Error in flagging');
      res.status(404).send(data);
    });
}

function getRelatedProducts(req, res) {
  .then((data) => {
  console.log('Related products successfully retrieved!');
  res.send(data);
})
    .err((err) => {
      console.log('Uh-oh, couldn\'t get related products!')
      res.send(err);
    })
};

function return404(request, response) {
  response.status(404);
  response.send('<div><center><h1>[404]</h1></center></div>');
}

function getAllProducts(request, response) {
  // these next 2 lines are for visual ease, but not needed
  let requestFromClient = request;
  let responseFromClient = response;

  axios.get(API_URL, CONFIG_WITH_TOKEN) // API_URL = https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products
    .then( (data) => {
      responseFromClient.status(200);
      responseFromClient.send(data);
    })
    .catch((error) => { console.error('API GET ERROR'); })
}

function getOneProduct(request, response) { }

function getProductStyles(request, response) { }

// Q&A
// function getAllProducts(request, response) {
//   // these next 2 lines are for visual ease, but not needed
//   let requestFromClient = request;
//   let responseFromClient = response;

//   axios.get(API_URL, CONFIG_WITH_TOKEN) // API_URL = https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products
//     .then( (data) => {
//       responseFromClient.status(200);
//       responseFromClient.send(data);
//     })
//     .catch((error) => { console.error('API GET ERROR'); })
// }
function getQuestions(req, res) {
  axios.get(API_URL, CONFIG_WITH_TOKEN)
    .then((data) => {
      res.status(200);
      res.send(data);
    })
    .catch((err) => {
      console.log('Error in getting questions:', err);
      res.status(404).send(err);
    })

}

function getAnswers(req, res) {
  .then(data => {
  console.log('answers data', data);
  res.status(200).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('get answers err: ', err)
    });
}

function postQuestions(req, res) {
  .then(data => {
  res.status(201).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('post ask err: ', err)
    });
}

function postAnswer(req, res) {
  .then(data => {
  res.status(201).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('post answer err: ', err)
    });
}

function putHelpfulQuestion(req, res) {
  .then(data => {
  console.log('helpfulquestions put request data', data);
  res.status(200).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('helpfulquestion err: ', err)
    });
}

function reportQuestion(req, res) {
  .then(data => {
  console.log('reportquestions put request data', data);
  res.status(200).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('reportquestion err: ', err)
    });
}

function putHelpfulAnswer(req, res) {
  .then(data => {
  console.log('helpfulanswer put request data', data);
  res.status(200).send(data);
})
    .catch(err => {
      console.log(err);
      res.status(400).send('helpfulanswer err: ', err)
    });
}

function putReportAnswer(req, res) {
  .then(data => {
  console.log('reportanswer put request data', data);
  res.status(200).send(data);
})
    .catch(err => {
      console.log('reportanswer err: ', err);
      res.status(400).send(err)
    });
}



// EXPORTS
module.exports = {
  getMetaData: getMetaData,
  getRatings: getRatings,
  getReviews: getReviews,
  postReview: postReview,
  updateHelpfulPost: updateHelpfulPost,
  reportPost: reportPost,
  getRelatedProducts: getRelatedProducts,
  return404: return404,
  getAllProducts: getAllProducts,
  getOneProduct: getOneProduct,
  getProductStyles: getProductStyles
};
