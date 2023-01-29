/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

const TestApp = function CreateTestApp() {
  return (
    <div>Hello World!</div>
  );
};

describe('REACT: testing basic div rendering', () => {
  test('loads items eventually', async () => {
    render(<TestApp />);

    // Wait for page to update with query text
    const string = await screen.getByText('Hello World!');
    expect(string.textContent).toBe('Hello World!');
  });
});
