import React, { useContext } from 'react';

import * as requests from './axiosRequests';
import ProdContext from '../ProdContext.js';

function testGetRequest() {
  requests.get('/products')
    .then((response) => console.info(response.status, response.data))
    .catch((error) => console.error(error));
}

function testPostRequest() {
  const testPost = {
    product_id: 40344,
    rating: 2,
    summary: '<h1>DO NOT BE ALARMED</h1>',
    body: '<div>DID YOU FORGET SO QUICKLY</div>',
    recommend: true,
    name: 'test name',
    email: 'test@test.com',
    photos: [
      'http://www.google.com'
    ],
    characteristics: {}
  };

  requests.post('/reviews', testPost)
    .then((response) => console.info(response.status, response.data))
    .catch((error) => console.error(error));
}

function testPutRequest() {
  const reviewID = { review_id: 0 };

  requests.put('/reviews/1278333/helpful', reviewID)
    .then((response) => console.info(response.status, response.data))
    .catch((error) => console.error(error));
}

function testGetStylesRequest() {
  requests.get('/products/40344/styles')
    .then((response) => { console.info(response.status, response.data); })
    .catch((error) => { console.error(error); });
}

const TestAPI = function CreateTestAPIComponent() {
  const { setProdID } = useContext(ProdContext);

  function testSetProdID() {
    const newProdID = prompt('please enter your desired PROD_ID...');
    setProdID(newProdID);
  }

  return (
    <div id="test-api-component">
      <img
        style={{
          position: 'fixed',
          bottom: 10,
          right: 80,
          zIndex: 9001,
          border: 'none'
        }}
        alt="lightning rat with power tools"
        src="/images/pikachu-hard-at-work.gif"
      />
      <button type="button" onClick={testSetProdID}>SET PROD_ID TO _INPUT_</button>
      <button type="button" onClick={testGetRequest}>TEST GET PRODUCTS</button>
      <button type="button" onClick={testPostRequest}>TEST POST REVIEW</button>
      <button type="button" onClick={testPutRequest}>TEST PUT HELPFUL REVIEW</button>
      <button type="button" onClick={testGetStylesRequest}>OVERVIEW TEST GET STYLES</button>
    </div>
  );
};


export default TestAPI;
