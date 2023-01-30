
// LIBRARY REQUIRES
const axios = require('axios');

// LOCAL REQUIRES
const models = require('../models');


function parseGet(request, response) {
  let newURL = process.env.API_URL + request.url.slice(4);
  let config = {
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  }

  axios.get(newURL, config)
    .then((apiRes) => {
      console.info('request ended in 200');
      response.status(200);
      response.send(apiRes.data);
    })
    .catch((error) => {
      console.error(error);
      response.send(error);
    });
}

function parsePost(request, response) { }
function parsePut(request, response) { }

function return404(request, response) {
  console.info('request ended in 404');
  response.status(404);
  response.send(
    '<div><center><h1>[404]</h1></center></div>'
  )
}

module.exports = {
  get: parseGet,
  post: parsePost,
  put: parsePut,
  return404: return404
};
