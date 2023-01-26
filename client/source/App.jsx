
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import Overview from './components/Overview.jsx';
import QAModule from './components/questionsAnswers/QAModule.jsx';


// MAIN
const App = () => {
  console.info('APP COMPONENT MOUNTED');

  return (
    <div>
      !JELLO WHIRLED!
      <Overview />
      <QAModule />
    </div>
  );
}


export default App;
