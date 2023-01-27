
// LIBRARY IMPORTS
import React from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import Overview from './components/Overview.jsx';
import ReviewModule from './components/RR/ReviewModule.jsx';

const authServerURL = 'http://localhost:3000/api';

// MAIN
const App = () => {
  console.info('APP COMPONENT MOUNTED');


  function testGetRequest() {
    console.log('TEST GET REQUEST');
    axios.get(authServerURL + '/products')
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }


  return (
    <div>
      !JELLO WHIRLED!
      <Overview />
      <button onClick={testGetRequest}>TEST GET PRODUCTS REQUEST</button>
      <ReviewModule />
    </div>
  );
}


export default App;
