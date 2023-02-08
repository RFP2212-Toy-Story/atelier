/**
 * @jest-environment jsdom
 */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import

import Header from '../Header.jsx';


beforeEach(() => { render(<Header />); });

describe('Header: basic rendering', () => {
  test('it shows up instead of not showing up', async () => {
    const string = await screen.getByText('DINOMITE DESIGNS', { exact: false });
    expect(string.textContent).toContain('DINOMITE DESIGNS');
  });

  test('it changes to a reduced version if you scroll a lot', async () => {
    let header = await screen.getByTestId('header-proper');
    let { height } = getComputedStyle(header);
    expect(height).toBe('140px');

    fireEvent.scroll(window, { target: { scrollY: 500 } });
    header = await screen.getByTestId('header-proper');
    height = getComputedStyle(header).height;
    expect(height).toBe('80px');
  });
});
