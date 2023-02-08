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

describe('div', () => {
  test('That div is parent of input', async () => {
    const parent = screen.getByTestId('parent');
    const child = screen.getByTestId('child');
    expect(parent).toContainElement(child);
    expect(child).not.toContainElement(parent);
  });
  test('That div has a value and a placeholder', async () => {
    const child = screen.getByTestId('child');
    // console.log('child: ', child);
    expect(child).toHaveValue('1234');
    expect(child.placeholder).toBe('Have a Question? Search For Answers');
    expect(child.type).toBe('text');
  });
  test('will display the DOM in debug mode', () => {
    screen.debug();
  });
});
