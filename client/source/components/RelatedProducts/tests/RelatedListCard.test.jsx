/**
 * @jest-environment jsdom
 */
// LIBRARY IMPORTS
import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';

// LOCAL IMPORTS
import RelatedListCard from '../RelatedListCard.jsx';
import { testRelatedProduct, testRelatedProductsList, testRelatedProductStyles } from './testData.js';
import ProdContext from '../../../ProdContext';
import * as requests from '../../../utilities/axiosRequests';

jest.mock('../../../utilities/axiosRequests.js');

function renderWithContext(testSetId) {
  const setProdID = testSetId;
  return render(
    <ProdContext.Provider value={{ setProdID }}>
      <RelatedListCard relatedProductId={testRelatedProductsList[0]} />
    </ProdContext.Provider>
  );
}

beforeEach(() => {
  requests.get.mockImplementation((url) => {
    let data;

    switch (url) {
      case `/products/${testRelatedProduct.id}`:
        data = testRelatedProduct;
        break;
      case `/products/${testRelatedProduct.id}/styles`:
        data = testRelatedProductStyles;
        break;
      default:
        data = '404';
    }

    return (Promise.resolve(data));
  });

  renderWithContext(() => {});
});

describe('Related Product List Card: renders text', () => {
  it('renders product category', async () => {
    const header = await screen.getByTestId('card-category');
    // console.log('STRING VAR: ', string);
    expect(header).toBeInTheDocument();
  });
});
