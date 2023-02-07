/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import qaData from './exampleDataQA';
import QAList from '../QAList';

beforeEach(() => { render(<QAList questions={qaData.results[0]} />); });

afterEach(() => {
  cleanup();
});

describe('Question list basic rendering', () => {
  test('Basic Rendering', async () => {
    expect(screen.getByRole('div')).toBeInTheDocument();
  });
});
