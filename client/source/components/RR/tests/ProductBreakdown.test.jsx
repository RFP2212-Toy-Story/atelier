/**
 * @jest-environment jsdom
 */

import React from 'react';
import {
  render, screen
} from '@testing-library/react';
import * as testData from './RRdata.js';
import ProductBreakdown from '../ProductBreakdown/ProductBreakdown.jsx';

describe('Product Breakdown', () => {
  it('renders the characteristic names', async () => {
    render(<ProductBreakdown traits={testData.testMeta.characteristics} />);
    const renderedTrait = screen.getByText('Fit', { exact: false });
    expect(renderedTrait.textContent).toContain('Fit');
  });
});
