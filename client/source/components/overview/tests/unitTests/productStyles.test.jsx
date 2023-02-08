/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import ProductStyles from '../../sub-components/ProductStyles.jsx';
import * as testData from '../testData.js';

describe('Product Info: basic rendering', () => {
  test('loads a style', async () => {
    render(<ProductStyles
      currentStyleID={240500}
      styles={testData.testProductStyles.results}
      setStyle={null}
    />);
    const image = await screen.getByAltText('Forest Green & Black');
    expect(image.alt).toBe('Forest Green & Black');
  });
});
