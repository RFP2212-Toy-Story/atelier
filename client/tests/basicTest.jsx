/**
 * @jest-environment jsdom
 */
import React, { useEffect, useState } from 'react';

import * as requests from '../source/utilities/axiosRequests.js';


const TestApp = function CreateTestApp() {
  const [value, setValue] = useState('default value');

  useEffect(() => {
    requests.get('url_two')
      .then((response) => { console.info('TWO GOT:', response.data); });

    requests.get('url_one')
      .then((response) => {
        console.info('ONE GOT:', response.data);
        setValue(response.data);
      });
  }, [value]);

  return (
    <>
      <div>Hello World!</div>
      <div>{value}</div>
    </>
  );
};

export default TestApp;
