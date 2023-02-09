/**
 * @jest-environment jsdom
 */
import React, { useEffect, useState } from 'react';

import * as requests from '../source/utilities/axiosRequests.js';


const TestApp = function CreateTestApp() {
  const [value1, setValue1] = useState('nope');
  const [value2, setValue2] = useState('nope');

  useEffect(() => {
    requests.get('url_one')
      .then((response) => {
        console.info(response);
        setValue1(response.data);
      });

    requests.get('url_two')
      .then((response) => {
        console.info(response);
        setValue2(response.data);
      });
  }, []);

  return (
    <>
      <div>Hello World!</div>
      <div>{value1}</div>
      <div>{value2}</div>
    </>
  );
};

export default TestApp;
