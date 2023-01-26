
// LIBRARY IMPORTS
import React from 'react';

// LOCAL IMPORTS
import Overview from './components/overview/Overview.jsx';
import Header from './components/header/Header.jsx'


// MAIN
const App = () => {
  console.info('APP COMPONENT MOUNTED');

  return (
    <div>
      <Header />
      <Overview />
    </div>
  );
}


export default App;
