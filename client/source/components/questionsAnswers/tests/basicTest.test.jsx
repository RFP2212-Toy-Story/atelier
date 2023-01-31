/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import QAModule from '../QAModule';

describe('REACT: testing basic div rendering', () => {
  test('loads items eventually', async () => {
    render(<QAModule />);

    // Wait for page to update with query text
    const string = await screen.getByText('Hello World!');
    expect(string.textContent).toBe('Hello World!');
  });
});
