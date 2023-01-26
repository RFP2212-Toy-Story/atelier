
// LIBRARY REQUIRES
const axios = require('axios');

// LOCAL REQUIRES
const models = require('../models');


function parseGet(request, response) {
  console.log(process.env.API_TOKEN, process.env.API_URL);

  let newURL = process.env.API_URL + request.url.slice(4);
  console.log('newURL', newURL);

  let config = {
    headers: {
      'Authorization': process.env.API_TOKEN
    }
  }

  axios.get(newURL, config)
    .then((apiRes) => {
      response.status(200);
      response.send(apiRes.data);
    })
    .catch((error) => {
      console.error(error);
      response.sendStatus(error.response.status);
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
