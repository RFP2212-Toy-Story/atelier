/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen, cleanup, fireEvent
} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import * as testData from './RRdata.js';
import ProdContext from '../../../ProdContext.js';
import ReviewList from '../ReviewList/ReviewList.jsx';

function renderWithContext(testProduct) {
  const product = testProduct;
  return render(
    <ProdContext.Provider value={{ product }}>
      <ReviewList reviews={testData.testReviews} ratingsFilter={{}} updateList={() => {}} />
    </ProdContext.Provider>
  );
}

beforeEach(() => {
  renderWithContext(
    testData.testProduct
  );
});

afterEach(() => {
  cleanup();
});

describe('Review List', () => {
  it('should dislay the review date in "Month DD YYYY" format', () => {
    const renderedDate = screen.getByText('November 15th, 2020', { exact: false });
    expect(renderedDate.textContent).toContain('November 15th, 2020');
  });

  it('will open the AddReview form', async () => {
    const button = screen.getByText(/add a review/i);
    fireEvent.click(button);
    const string = screen.getByText('Review summary');
    expect(string.textContent).toContain('Review summary');
  });
});
