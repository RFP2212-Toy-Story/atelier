// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import Overview from './components/overview/Overview';
import Header from './components/header/Header';
import RelatedList from './components/RelatedProducts/RelatedList';
import OutfitList from './components/RelatedProducts/OutfitList';
import QAModule from './components/questionsAnswers/QAModule';
import ReviewModule from './components/RR/ReviewModule';
import TestAPI from './utilities/TestAPI';

// MAIN
const App = function CreateAppComponent() {
  console.info('APP COMPONENT MOUNTED');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5% 90% 5%' }}>
      <div />
      <div>
        <Header />
        <Overview />
        <RelatedList />
        <OutfitList />
        <QAModule />
        <ReviewModule />
        <TestAPI />
      </div>
      <div />
    </div>
  );
};

export default App;
