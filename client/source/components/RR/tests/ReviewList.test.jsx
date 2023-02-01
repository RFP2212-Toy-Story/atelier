import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { reviews } from './RRdata.js';
import ReviewList from '../ReviewList.jsx';

afterEach(() => {
  cleanup();
});

describe('Review List', () => {
  test('should have review date in "Month DD YYYY" format', async () => {
    render(<ReviewList reviews={reviews} />);
    const date = await screen.getByText('November 15th, 2020');
    expect(date.textContent).tobe('November 15th, 2020');
  });
});
