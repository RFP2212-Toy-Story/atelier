/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import Checkout from '../../sub-components/Checkout.jsx';
import * as testData from '../testData.js';

describe('Product Info: basic rendering', () => {
  test('loads a style', async () => {
    render(<Checkout style={testData.testProductStyles.results[0]} />);
    const string = await screen.getByText('XS');
    expect(string.textContent).toBe('XS');
  });
});
