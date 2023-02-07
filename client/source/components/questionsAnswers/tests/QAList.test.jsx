/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import qaData from './exampleDataQA';
import ProdContext from '../../../ProdContext';
import QAList from '../QAList';

const questions = qaData.results;

const customRender = (component, { providerProps }) => (
  render(
    <ProdContext.Provider value={providerProps}>{component}</ProdContext.Provider>
  )
);

beforeEach(() => {
  const providerProps = { product: 'camo onesie', prodID: 40344 };
  customRender(<QAList
    questions={questions}
    getQuestions={() => {}}
  />, { providerProps });
});

afterEach(() => {
  cleanup();
});

describe('Question list basic rendering', () => {
  // test('Basic Rendering', async () => {
  //   expect(screen.getByRole('div')).toBeInTheDocument();
  // });
  test('That div is ancestor of LoadQA', async () => {
    const ancestor = screen.getByTestId('ancestor1');
    const descendant1 = screen.getByTestId('descendant1');
    expect(ancestor).toContainElement(descendant1);
  });
});
