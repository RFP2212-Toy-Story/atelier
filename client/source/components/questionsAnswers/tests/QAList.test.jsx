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

describe('Check div', () => {
  test('That div is a div', async () => {
    const ancestor1 = screen.getByTestId('ancestor1');
    // console.log('ancestor1: ', ancestor1);
    expect(ancestor1.type).toBe('div');
  });
});
