/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import PhotoBlock from '../../PhotoBlock.jsx';
import * as testData from '../testData.js';

beforeEach(() => {
  render(<PhotoBlock photos={testData.testProductStyles.results[0].photos} />);
});

describe('PhotoBlock: basic rendering', () => {
  test('loads and displays an image', async () => {
    const image = await screen.getByAltText('product photograph');
    expect(image.src).toContain('https://images.unsplash.com');
  });

  test('loads and displays multiple thumbnail images', async () => {
    const images = await screen.getAllByAltText('thumbnail', { exact: false });
    expect(images.length).toBe(2);
  });

  test('changes the primary image when the arrow buttons are clicked', async () => {
    const buttons = screen.getAllByRole('button');
    let image = await screen.getByAltText('product photograph');
    expect(image.src).toContain('1501088430049');

    fireEvent.click(buttons[0]);
    image = await screen.getByAltText('product photograph');
    expect(image.src).toContain('1534011546717');

    fireEvent.click(buttons[1]);
    image = await screen.getByAltText('product photograph');
    expect(image.src).toContain('1501088430049');
  });
});
