import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { reviews } from './RRdata.js';
import ReviewList from '../ReviewList.jsx';

afterEach(() => {
  cleanup();
});

describe('More Reviews', () => {
  test('renders More Reviews button', () => {
    render(<ReviewList reviews={reviews} />);
  });
});
