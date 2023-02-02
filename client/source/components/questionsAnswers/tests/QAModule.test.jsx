/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import QAModule from '../QAModule';

afterEach(() => {
  cleanup();
});

describe('REACT: testing basic QAModule rendering', () => {
  test('loads items eventually', async () => {
    render(<QAModule />);

    // Wait for page to update with query text
    const string = await screen.getByText('Questions and Answers');
    expect(string.textContent).toBe('Questions and Answers');
  });
});
