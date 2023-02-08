/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen
} from '@testing-library/react';
import * as testData from './RRdata.js';
import ReviewTile from '../ReviewList/ReviewTile.jsx';


describe('Review Tile', () => {
  it('renders the review summary', async () => {
    render(<ReviewTile review={testData.testReviews[0]} updateList={() => {}} />);
    const renderedSummary = screen.getByText('Eos ratione modi.', { exact: false });
    expect(renderedSummary.textContent).toContain('Eos ratione modi.');
  });
});

