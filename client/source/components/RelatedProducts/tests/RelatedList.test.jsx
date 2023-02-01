// JEST UNIT TEST

import React from 'react';
import { render, screen } from '@testing-library/react';

import RelatedListCard from '../RelatedListCard.jsx';
import * as testData from './testData.js';

describe('Related Product List Card: renders text', () => {
  it('renders product category', async () => {
    render(<RelatedListCard product={testData.testProduct} />);
    const string = await screen.getByText('Dress Shoes');
    expect(string.textContent).toBe('Dress Shoes');
  });
});
