import React from 'react';

import * as requests from './axiosRequests';

function testGetRequest() {
  requests.get('/products')
    .then((response) => console.info(response.status, response.data))
    .catch((error) => error);
}

function testPutRequest() {
  requests.put('/reviews/1278333/helpful', { review_id: 0 })
    .then((response) => console.info(response.status, response.data))
    .catch((error) => error);
}

const TestAPI = function createTestAPIComponent() {
  return (
    <div>
      <button type="button" onClick={testGetRequest}>TEST GET PRODUCTS</button>
      <button type="button" onClick={testPutRequest}>TEST PUT HELPFUL REVIEW</button>
    </div>
  );
};


export default TestAPI;
