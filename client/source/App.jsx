// LIBRARY IMPORTS
import React, { useState } from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import Overview from './components/overview/Overview.jsx';
import Header from './components/header/Header.jsx'
import QAModule from './components/questionsAnswers/QAModule.jsx';
import ReviewModule from './components/RR/ReviewModule.jsx';import { ProdContext } from './ProdContext.js';


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

  const [prodID, setProdID] = useState('product id');

  return (
    <div>
      <ProdContext.Provider value={{prodID, setProdID}}>
        <Header />
        <Overview />
        <button onClick={testGetRequest}>TEST GET PRODUCTS REQUEST</button>
        <QAModule />
      </ProdContext.Provider>
      <ReviewModule />
    </div>
  );
}


export default App;
