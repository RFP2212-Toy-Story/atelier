/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import ProductText from '../../ProductText.jsx';
import * as testData from '../testData.js';

describe('Product Text: basic rendering', () => {
  test('loads product slogan', async () => {
    render(<ProductText product={testData.testProduct} />);
    const string = await screen.getByText('Blend in to your crowd');
    expect(string.textContent).toBe('Blend in to your crowd');
  });
});
