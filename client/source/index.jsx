// LIBRARY IMPORTS
import React from 'react';
import { createRoot } from 'react-dom/client';

// LOCAL IMPORTS
import AppHolder from './AppHolder';


// MAIN
const root = createRoot(document.getElementById('root'));
root.render(
  <AppHolder />,
);
