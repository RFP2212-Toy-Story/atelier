/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import HelpfulQ from '../HelpfulQ';
import ProdContext from '../../../ProdContext';
import qaData from './exampleDataQA';

const question = qaData.results[0];

const customRender = (component, { providerProps }) => (
  render(
    <ProdContext.Provider value={providerProps}>{component}</ProdContext.Provider>
  )
);

beforeEach(() => {
  const providerProps = { product: 'camo onesie', prodID: 40344 };
  customRender(<HelpfulQ
    questionHelpfulness={question.question_helpfulness}
    id={question.question_id}
    getQuestions={() => {}}
    questionBody={question.question_body}
  />, { providerProps });
});

afterEach(() => {
  cleanup();
});

describe('Button element is working', () => {
  test('Button checks', async () => {
    const buttons = await screen.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[0]).toHaveTextContent(`Yes (${question.question_helpfulness})`);
    expect(buttons[1]).toBeInTheDocument();
    expect(buttons[1]).toHaveTextContent('Add Answer');
  });
  test('Open Modal', async () => {
    const buttons = await screen.getAllByRole('button');
    userEvent.click(buttons[1]);
    await waitFor(() => {
      const modal = screen.getByTestId('modal');
      expect(modal).toBeInTheDocument();
    });
  });
  test('check span', async () => {
    const span = await screen.getByText('Helpful?', { exact: false });
    expect(span).toBeInTheDocument();
  });
});
