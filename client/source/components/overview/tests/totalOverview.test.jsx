/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

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
  renderWithContext(testData.testProductId, testData.testProduct, testData.testProductStyles);
});

afterEach(() => { jest.restoreAllMocks(); });

describe('OVERVIEW: comprehensive test', () => {
  it('should display the product name', () => {
    const renderedText = screen.getByText('Camo Onesie', { exact: false });
    expect(renderedText.textContent).toBe('Camo Onesie');
  });

  it('should change the style presented on screen', () => {
    const button = screen.getByAltText('Desert Brown & Tan');
    let cost = screen.getByText('$140.00').parentNode;
    expect(cost.textContent).toBe('$140.00');

    fireEvent.click(button);
    cost = screen.getByText('$100.00').parentNode;
    expect(cost.textContent).toBe('$140.00\xa0$100.00'); // Jest does not recognize &nbsp; as a space, so use \xa0
  });

  it.skip('will display the DOM in debug mode', () => {
    screen.debug();
  });

  it.todo('will not much anything else until we write the tests');
});
