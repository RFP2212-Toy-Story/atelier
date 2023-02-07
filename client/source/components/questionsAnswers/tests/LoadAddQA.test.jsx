/**
 * @jest-environment jsdom
 */
import React from 'react';
import {
  render, screen, cleanup, waitFor
} from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import ProdContext from '../../../ProdContext';
import LoadAddQA from '../LoadAddQA';

const questionCountTest = 2;

const customRender = (component, { providerProps }) => (
  render(
    <ProdContext.Provider value={providerProps}>{component}</ProdContext.Provider>
  )
);

beforeEach(() => {
  const providerProps = { product: 'camo onesie', prodID: 40344 };
  customRender(<LoadAddQA
    questionCount={questionCountTest}
    setQuestionCount={() => {}}
  />, { providerProps });
});

afterEach(() => {
  cleanup();
});

describe('Button Component', () => {
  test('Check button by test ID', async () => {
    const button = await screen.getByTestId('More answered');
    expect(button).toBeInTheDocument();
    expect(button.textContent).toBe('More Answered Questions');
  });
  test('Check buttons by role', async () => {
    const buttons = await screen.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent('Add a Question');
  });
  test('Open Modal', async () => {
    const buttons = await screen.getAllByRole('button');
    userEvent.click(buttons[1]);
    await waitFor(() => {
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });
});
