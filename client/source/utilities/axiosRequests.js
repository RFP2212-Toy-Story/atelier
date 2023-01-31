import axios from 'axios';


const authServerURL = 'http://localhost:3000';

/**
 * Fire an Axios Get Request.
 *
 * It takes a string value to append to the endpoint,
 * which should match the Atelier API endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @returns an Axios Request Promise
 * */
const get = function getByEndpoint(endpoint) {
  return axios.get(`${authServerURL}/api${endpoint}`);
};

/**
 * Fire an Axios Post Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the Atelier API endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be posted
 * @returns an Axios Request Promise
 * */
const post = function postByEndpoint(endpoint, json) {
  const config = {
    data: json
  };

  return axios.post(`${authServerURL}/api${endpoint}`, config);
};

/**
 * Fire an Axios Put Request.
 *
 * It takes a data json, and a string value to append to the endpoint,
 * which should match the Atelier API endpoint pattern.
 * @param {string} endpoint - Endpoint to be used
 * @param {json} json - Data to be put
 * @returns an Axios Request Promise
 * */
const put = function putByEndpoint(endpoint, json) {
  const config = {
    param: json
  };

  return axios.put(`${authServerURL}/api${endpoint}`, config);
};

export {
  get,
  post,
  put
};
