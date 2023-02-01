/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import * as requests from '../../../utilities/axiosRequests.js';
import * as testData from './testData.js';
import ProdContext from '../../../ProdContext.js';
import Overview from '../Overview.jsx';


function renderWithContext(id, data) {
  const prodID = id;
  const product = data;
  return render(
    <ProdContext.Provider value={{ prodID, product }}>
      <Overview />
    </ProdContext.Provider>
  );
}

beforeEach(() => {
  const spyGet = jest.spyOn(requests, 'get');
  spyGet.mockResolvedValue(testData.testProductResponse);
  renderWithContext(testData.testProductId, testData.testProduct);
});

afterEach(() => { jest.restoreAllMocks(); });

describe('OVERVIEW: comprehensive test', () => {
  it('should mock the axios requets module', () => {
    // TODO: regarding the currently annoying error...
    // When testing, code that causes React state updates should be wrapped into act(...):
    expect(requests.get).toHaveBeenCalledTimes(1);
  });

  it('should display the product name', () => {
    const renderedText = screen.getByText('Camo Onesie', { exact: false });
    expect(renderedText.textContent).toBe('Camo Onesie');
  });

  it.todo('will not much anything else until we write the tests');
});
