/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import ProductInfo from '../../ProductInfo.jsx';
import * as testData from '../testData.js';

describe('Product Info: basic rendering', () => {
  test('loads product name', async () => {
    render(<ProductInfo product={testData.testProduct} />);
    const string = await screen.getByText('Camo Onesie');
    expect(string.textContent).toBe('Camo Onesie');
  });
});
