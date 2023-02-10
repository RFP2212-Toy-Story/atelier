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

function clearLocalStorage() {
  try {
    console.info(localStorage);
    localStorage.clear();
  } catch (error) {
    console.error(error);
  }
}

const TestAPI = function CreateTestAPIComponent() {
  const { setProdID } = useContext(ProdContext);

  function testSetProdID(event) {
    let newProdID = event?.target?.id;
    if (newProdID === 'input') {
      newProdID = prompt('please enter your desired PROD_ID...');
    }
    setProdID(newProdID);
  }

  return (
    <div id="test-api-component" data-module-name="test-api-component" style={{ margin: '2rem 0' }}>
      <div id="adorable-pikachu">
        <button
          onClick={() => { document.getElementById('adorable-pikachu').style.visibility = 'hidden'; }}
          type="button"
          style={{
            position: 'fixed',
            bottom: 100,
            right: 60,
            zIndex: 9002,
            border: 'none',
            backgroundColor: 'transparent'
          }}
        >
          <h2>✗</h2>
        </button>
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
      </div>
      <hr />
      <div style={{ fontSize: '2rem' }}>
        ⛔ 𝔸𝔻𝕄𝕀ℕ𝕊 𝕆ℕ𝕃𝕐 ⛔
      </div>
      <div>
        <button type="button" id="input" onClick={testSetProdID}>SET PROD_ID TO _INPUT_</button>
        <button type="button" id="40355" onClick={testSetProdID}>SET PROD_ID TO 40355</button>
        <button type="button" id="40344" onClick={testSetProdID}>SET PROD_ID TO 40344</button>
      </div>
      <div>
        <button type="button" onClick={testGetRequest}>TEST GET PRODUCTS</button>
        <button type="button" onClick={testPostRequest}>TEST POST REVIEW</button>
        <button type="button" onClick={testPutRequest}>TEST PUT HELPFUL REVIEW</button>
        <button type="button" onClick={testGetStylesRequest}>OVERVIEW TEST GET STYLES</button>
      </div>
      <button type="button" onClick={clearLocalStorage}>CLEAR LOCAL STORAGE</button>
    </div>
  );
};


export default TestAPI;
