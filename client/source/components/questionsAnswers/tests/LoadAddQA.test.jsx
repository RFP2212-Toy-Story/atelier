/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import LoadAddQA from '../LoadAddQA';

afterEach(() => {
  cleanup();
});

describe('Button Component', () => {
  render(<LoadAddQA btnTxt="More Answered Questions" />);
  const button = screen.getByTestId('button');
  // Test 1
  test('Button Rendering', () => {
    expect(button).toBeInTheDocument();
  });
  // Test 2
  test('Button Text', () => {
    expect(button).toHaveTextContent('More Answered Questions');
  });
});
