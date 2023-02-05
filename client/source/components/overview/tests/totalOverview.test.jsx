/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';

import * as requests from '../../../utilities/axiosRequests.js';
import * as testData from './testData.js';
import ProdContext from '../../../ProdContext.js';
import Overview from '../Overview.jsx';

// prodID, setProdID, product, setProduct, styles, setStyles, meta, setMeta
function renderWithContext(testID, testProduct, testStyles) {
  const prodID = testID;
  const product = testProduct;
  const styles = testStyles.results;
  return render(
    <ProdContext.Provider value={{ prodID, product, styles }}>
      <Overview />
    </ProdContext.Provider>
  );
}

beforeEach(() => {
  const spyGet = jest.spyOn(requests, 'get');
  spyGet.mockResolvedValue(testData.testProductResponse);
  renderWithContext(testData.testProductId, testData.testProduct, testData.testProductStyles);
});

afterEach(() => { jest.restoreAllMocks(); });

describe('OVERVIEW: comprehensive test', () => {
  it.skip('should mock the axios requets module', () => {
    // TODO: regarding the currently annoying error...
    // When testing, code that causes React state updates should be wrapped into act(...):
    expect(requests.get).toHaveBeenCalledTimes(1);
  });

  it('should display the product name', () => {
    const renderedText = screen.getByText('Camo Onesie', { exact: false });
    expect(renderedText.textContent).toBe('Camo Onesie');
  });

  // it('should change the loaded style', () => {
  //   const button = screen.getByText('Desert Brown & Tan');
  //   let cost = screen.getByText('$140.00').parentNode;
  //   console.log(cost.textContent);

  //   fireEvent.click(button);
  //   cost = screen.getByText('$100.00').parentNode;
  //   console.log(cost.textContent);
  // });

  it('will display the DOM in debug mode', () => {
    screen.debug();
  });

  it.todo('will not much anything else until we write the tests');
});
