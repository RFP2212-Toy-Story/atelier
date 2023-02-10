// LIBRARY IMPORTS
import React from 'react';
import { createRoot } from 'react-dom/client';

// LOCAL IMPORTS
import AppHolder from './AppHolder';


// MAIN
console.info('HOST:', `http://${process.env.SITE_URL}:${process.env.PORT}`);
const root = createRoot(document.getElementById('root'));
root.render(
  <AppHolder />
);
