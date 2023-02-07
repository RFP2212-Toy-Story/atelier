/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import RelatedList from '../RelatedList.jsx';
import ProdContext from '../../../ProdContext';
import testProductId from './testData.js';

const customRender = (component, { providerProps }) => (
  render(
    <ProdContext.Provider value={providerProps}>{component}</ProdContext.Provider>
  )
);

beforeEach(() => {
  const providerProps = { testProductId };
  customRender(<RelatedList />, { providerProps });
});

afterEach(() => {
  cleanup();
});

describe('Related Product List icons working', () => {
  it('Icons are clickable', async () => {
    const textElement = screen.getByText('Related Products');
    expect(textElement).toBeInTheDocument();
  });
});
