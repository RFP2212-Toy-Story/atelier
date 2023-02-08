/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import AnswerForm from '../AnswerForm';

beforeEach(() => {
  render(<AnswerForm
    handlePost={() => {}}
  />);
});

describe('Answer form related', () => {
  test('should render a form to the page', () => {
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
  test('test inputs', async () => {
    const questionInput = screen.getByLabelText('Your Answer *');
    const nicknameInput = screen.getByLabelText('What is your nickname? *');
    const emailInput = screen.getByLabelText('What is your email? *');
    await userEvent.type(questionInput, 'I love this product');
    await expect(questionInput).toHaveValue('I love this product');
    await userEvent.type(nicknameInput, 'Uncle J');
    await expect(nicknameInput).toHaveValue('Uncle J');
    await userEvent.type(emailInput, 'uncleJ@galvanize.com');
    await expect(emailInput).toHaveValue('uncleJ@galvanize.com');
  });
});
