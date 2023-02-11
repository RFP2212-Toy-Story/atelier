// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import Overview from './components/overview/Overview';
import Header from './components/header/Header';
import RelatedList from './components/RelatedProducts/RelatedList';
import Pikachu from './utilities/Pikachu.jsx';
import QAModule from './components/questionsAnswers/QAModule';
import ReviewModule from './components/RR/ReviewModule';
import TestAPI from './utilities/TestAPI';

// MAIN
const App = function CreateAppComponent({ adminStatus }) {
  console.info('APP COMPONENT MOUNTED');

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '5% 90% 5%' }}>
      <div />
      <div>
        <Header />
        <Overview />
        <RelatedList />
        <QAModule />
        <ReviewModule />
        {adminStatus ? <TestAPI /> : null}
        {adminStatus ? <Pikachu /> : null}
      </div>
      <div />
    </div>
  );
};

export default App;
