/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import mockAxios from 'axios';
import ProdContext from '../../../ProdContext.js';
import QAModule from '../QAModule';
import qaData from './exampleDataQA';

const questions = qaData.results;

const testData = {
  status: 200,
  data: {
    results: [questions]
  }
};

function renderWithContext(id) {
  const prodID = id;
  return render(
    <ProdContext.Provider value={{ prodID }}>
      <QAModule />
    </ProdContext.Provider>
  );
}

jest.mock('axios');
mockAxios.get.mockResolvedValue(testData);

beforeEach(() => {
  renderWithContext(questions[0].question_id);
});

afterEach(() => {
  jest.restoreAllMocks();
});

describe('Axios mock get request', () => {
  test('should return entry from API', async () => {
    // const result = await getQuestions();
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
