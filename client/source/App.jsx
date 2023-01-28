// LIBRARY IMPORTS
import React from 'react';
import axios from 'axios';

// LOCAL IMPORTS
import Overview from './components/overview/Overview';
import Header from './components/header/Header';
import RelatedList from './components/RelatedProducts/RelatedList';
import OutfitList from './components/RelatedProducts/OutfitList';
import QAModule from './components/questionsAnswers/QAModule';
import ReviewModule from './components/RR/ReviewModule';


// TODO: create a testing suite
const authServerURL = 'http://localhost:3000/api';


// MAIN
const App = function CreateAppComponent() {
  console.info('APP COMPONENT MOUNTED');

  function testGetRequest() {
    axios.get(`${authServerURL}/products`)
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
      <button type="button" onClick={testGetRequest}>TEST GET PRODUCTS REQUEST</button>
      <RelatedList />
      <OutfitList />
      <QAModule />
      <ReviewModule />
    </div>
  );
};

export default App;
