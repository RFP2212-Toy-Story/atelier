/**
 * @jest-environment jsdom
 */

// use the above in each file, or the below once... somehow
// every project needs to have its own config. If you want the config to be picked up automatically,
// put it inside jest.config.js file or like usually in package.json.
// https://stackoverflow.com/questions/69227566/consider-using-the-jsdom-test-environment
// https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
// { "projects": ["<rootDir>/client", "<rootDir>/server", "<rootDir>/some-glob/*"] }

// import { render, screen } from '@testing-library/react'; // jest is a jerk about using ES6 import
const { render, screen } = require('@testing-library/react');
const React = require('react');

const TestApp = function CreateTestApp() {
  return (
    <div>Hello World!</div>
  );
};

describe('REACT: testing basic div rendering', () => {
  test('loads items eventually', async () => {
    render(<TestApp />);

    // Wait for page to update with query text
    const string = await screen.getByText('Hello World!');
    expect(string).toBeTruthy();
  });
});

