/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

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

describe('REACT: testing basic div rendering', () => {
  test('loads items eventually', async () => {
    await render(<TestApp />);

    // Wait for page to update with query text
    const string = await screen.getByText('Hello World!');
    screen.debug();
    expect(string.textContent).toBe('Hello World!');
  });
});
