import axios from 'axios';


const authServerURL = 'http://localhost:3000/api';


const get = function getByEndpoint(endpoint) {
  return axios.get(`${authServerURL}/${endpoint}`);
};

const post = function postBygetByEndpoint(endpoint) {
  return axios.post(`${authServerURL}/${endpoint}`);
};
const put = function putBygetByEndpoint(endpoint) {
  return axios.put(`${authServerURL}/${endpoint}`);
};

export {
  get,
  post,
  put,
};
