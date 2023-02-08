/**
 * @jest-environment jsdom
 */
// LIBRARY IMPORTS
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

// LOCAL IMPORTS
import RelatedList from '../RelatedList.jsx';
import ProdContext from '../../../ProdContext';
import { testProductId, testRelatedProductsList } from './testData.js';
import * as requests from '../../../utilities/axiosRequests';

jest.mock('../../../utilities/axiosRequests.js');

function renderWithContext(testProdId) {
  const prodID = testProdId;
  return render(
    <ProdContext.Provider value={{ prodID }}>
      <RelatedList />
    </ProdContext.Provider>
  );
}

beforeEach(() => {
  requests.get.mockImplementation(() => {
    const data = testRelatedProductsList;
    return (Promise.resolve(data));
  });
  renderWithContext(testProductId);
});

afterEach(() => {
  cleanup();
});

describe('Related Product List header is displaying', () => {
  it('Header is rendering', async () => {
    const heading = await screen.getByTestId('heading');
    expect(heading).toBeInTheDocument();
  });
});
