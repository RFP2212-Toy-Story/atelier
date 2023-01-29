// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import Overview from './components/overview/Overview';
import Header from './components/header/Header';
import RelatedList from './components/RelatedProducts/RelatedList';
import OutfitList from './components/RelatedProducts/OutfitList';
import QAModule from './components/questionsAnswers/QAModule';
import ReviewModule from './components/RR/ReviewModule';

import * as requests from './utilities/axiosRequests';


// MAIN
const App = function CreateAppComponent() {
  console.info('APP COMPONENT MOUNTED');

  function testGetRequest() {
    requests.get('products')
      .then((response) => console.info(response.data))
      .catch((error) => error);
  }

  return (
    <div>
      <Header />
      <Overview />
      <button type="button" onClick={testGetRequest}>APP TEST GET PRODUCTS</button>
      <RelatedList />
      <OutfitList />
      <QAModule />
      <ReviewModule />
    </div>
  );
};

export default App;
