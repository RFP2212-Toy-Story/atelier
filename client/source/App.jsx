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
import EmptyStar from './components/shared/EmptyStar.jsx';
import QuarterStar from './components/shared/QuarterStar.jsx';
import HalfStar from './components/shared/HalfStar.jsx';
import ThreeQuarterStar from './components/shared/ThreeQuarterStar.jsx';
import FullStar from './components/shared/FullStar.jsx';

// MAIN
const App = function CreateAppComponent() {
  console.info('APP COMPONENT MOUNTED');

  return (
    <div>
      <Header />
      <Overview />
      <EmptyStar />
      <QuarterStar />
      <HalfStar />
      <ThreeQuarterStar />
      <FullStar />
      <RelatedList />
      <OutfitList />
      <QAModule />
      <ReviewModule />
      <TestAPI />
    </div>
  );
};

export default App;
