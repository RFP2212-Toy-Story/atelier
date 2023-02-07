/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import HelpfulA from '../HelpfulA';

afterEach(() => {
  cleanup();
});

describe('Button element is working', () => {
  test('Button checks', async () => {
    render(<HelpfulA />);
    const button = await screen.getByTestId('helpful');
    expect(button).toBeInTheDocument();
  });
});
