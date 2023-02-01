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
  test('Button Rendering', async () => {
    render(<LoadAddQA />);
    const button = await screen.getByTestId('More answered');
    expect(button.textContent).toBe('More Answered Questions');
  });
});
