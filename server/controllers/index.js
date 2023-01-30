
// LIBRARY REQUIRES
const axios = require('axios');

// LOCAL REQUIRES
const models = require('../models'); // eslint-disable-line


function parseGet(request, response) {
  const newURL = process.env.API_URL + request.url.slice(4);
  const config = {
    headers: {
      Authorization: process.env.API_TOKEN
    }
  };

  axios.get(newURL, config)
    .then((apiRes) => {
      console.info('request ended in', apiRes.status);
      response.status(apiRes.status);
      response.send(apiRes.data);
    })
    .catch((error) => {
      console.error(error);
      response.sendStatus(error.response.status);
    });
}

function parsePost(request, response) {
  const newURL = process.env.API_URL + request.url.slice(4);
  const config = {
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  };

  axios.post(newURL, request.body.data, config)
    .then((apiRes) => {
      console.info('request ended in', apiRes.status);
      response.status(apiRes.status);
      response.send(apiRes.data);
    })
    .catch((error) => {
      console.error(error);
      response.sendStatus(error.response.status);
    });
}

function parsePut(request, response) {
  const newURL = process.env.API_URL + request.url.slice(4);
  const config = {
    headers: {
      Authorization: process.env.API_TOKEN,
    },
  };

  axios.put(newURL, request.body.data, config)
    .then((apiRes) => {
      console.info('request ended in', apiRes.status);
      response.status(apiRes.status);
      response.send(apiRes.data);
    })
    .catch((error) => {
      console.error(error);
      response.sendStatus(error.response.status);
    });
}

function return404Page(request, response) {
  console.info('request ended in 404');
  response.status(404);
  response.send(
    '<div><center><h1>[404]</h1></center></div>'
  );
}

module.exports = {
  get: parseGet,
  post: parsePost,
  put: parsePut,
  return404: return404Page
};
