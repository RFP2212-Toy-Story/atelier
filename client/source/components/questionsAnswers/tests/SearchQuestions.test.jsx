/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchQuestions from '../SearchQuestions';

beforeEach(() => {
  render(<SearchQuestions
    handleQ={() => {}}
    query="1234"
  />);
});

afterEach(() => {
  cleanup();
});

describe('Test that div has value, a placeholder, and is parent of input', () => {
  test('That div is parent of input', async () => {
    const parent = screen.getByTestId('parent');
    const child = screen.getByTestId('child');
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent);
  });
  test('That div has a value and a placeholder', async () => {
    const child = screen.getByTestId('child');
    expect(child).toHaveValue('1234');
    expect(child.placeholder).toBe('Have a Question? Search For Answers');
    expect(child.type).toBe('text');
  });
  test('will display the DOM in debug mode', () => {
    screen.debug();
  });
});
