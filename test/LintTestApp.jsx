
// LIBRARY IMPORTS
import React from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import Overview from './components/overview/Overview.jsx';
import QAModule from './components/questionsAnswers/QAModule.jsx';
import Header from './components/header/Header.jsx'


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
      <Header />
      <Overview />
      <button onClick={testGetRequest}>TEST GET PRODUCTS REQUEST</button>
      <QAModule />
    </div>
  );
}


export default App;