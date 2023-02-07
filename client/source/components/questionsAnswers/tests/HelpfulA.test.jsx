/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import HelpfulA from '../HelpfulA';
import qaData from './exampleDataQA';

const answer = qaData.results[0].answers[3073949];

beforeEach(() => {
  render(<HelpfulA
    id={answer.id}
    getQuestions={() => {}}
    helpfulness={answer.helpfulness}
  />);
});

afterEach(() => {
  cleanup();
});

describe('Button element is working', () => {
  test('Button check by role', async () => {
    const buttons = await screen.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent(`Yes (${answer.helpfulness})`);
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent('Report');
  });
  test('That span is ancestor of button', async () => {
    const ancestor = screen.getByTestId('ancestor');
    const descendant = screen.getByTestId('descendant');
    expect(ancestor).toContainElement(descendant);
    expect(descendant).not.toContainElement(ancestor);
  });
});
