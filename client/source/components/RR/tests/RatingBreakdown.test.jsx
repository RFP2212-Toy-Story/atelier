/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen
} from '@testing-library/react';
import * as testData from './RRdata.js';
import RatingBreakdown from '../RatingBreakdown/RatingBreakdown.jsx';

describe('Rating Breakdown', () => {
  it('renders the number of customer reviews', async () => {
    render(<RatingBreakdown
      ratings={testData.testMeta.ratings}
      recommend={testData.testMeta.recommended}
      ratingsFilter={{
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
      }}
      toggleRating={() => {}}
      resetDefault={() => {}}
      updateList={() => {}}
    />);
    const string = screen.getByText(/customer reviews/i);
    expect(string.textContent).toContain('47 Customer Reviews');
  });
});
