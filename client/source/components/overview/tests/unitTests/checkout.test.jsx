/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import Checkout from '../../sub-components/Checkout.jsx';
import * as testData from '../testData.js';

beforeEach(() => { render(<Checkout style={testData.testProductStyles.results[0]} />); });

describe('Product Info: basic rendering', () => {
  test('loads a style', async () => {
    const string = await screen.getByText('XS');
    expect(string.textContent).toBe('XS');
  });

  test('loads proper quantities upon select size change', async () => {
    const selectSize = await screen.getByText('Choose a size...').parentNode;
    const selectQuantity = await screen.getByText('Choose a quantity...').parentNode;
    expect(selectQuantity.length).toBe(2);

    await fireEvent.change(selectSize, { target: { value: 'XS' } });
    expect(selectQuantity.length).toBe(9);
  });
});
