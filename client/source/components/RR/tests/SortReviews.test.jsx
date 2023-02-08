/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen
} from '@testing-library/react';
// import * as testData from './RRdata.js';
import SortReviews from '../SortReviews/SortReviews.jsx';

const string = 'relevant';

describe('Sort Reviews', () => {
  it('renders the sort bar', async () => {
    render(<SortReviews sortType={string} setSortType={() => {}} />);
    const renderedBar = screen.getByText('Reviews sorted by', { exact: false });
    expect(renderedBar.textContent).toContain('Reviews sorted by');
  });
});
