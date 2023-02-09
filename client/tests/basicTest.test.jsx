/**
 * @jest-environment jsdom
 */
import React from 'react';
import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import TestApp from './basicTest';
import * as requests from '../source/utilities/axiosRequests.js';

jest.mock('../source/utilities/axiosRequests.js');
requests.get.mockImplementation((url) => {
  let data;

  switch (url) {
    case 'url_one':
      data = 'data from ONE';
      break;
    case 'url_two':
      data = 'data from TWO';
      break;
    default:
      data = '404';
  }

  return (Promise.resolve({ data }));
});

// To handle GET requests inside useEffect, you need a lot of async
beforeEach(async () => {
  await act(async () => render(<TestApp />));
});

describe('REACT: testing basic div rendering', () => {
  test('loads items eventually', async () => {
    screen.debug();

    let string = await screen.getByText('Hello World!');
    expect(string.textContent).toBe('Hello World!');

    string = await screen.getByText('data from ONE');
    expect(requests.get).toHaveBeenCalledTimes(2);
    expect(string).toBeInTheDocument();
  });
});
