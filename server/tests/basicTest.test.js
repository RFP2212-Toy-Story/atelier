const add = require('./basicTest');

describe('TESTING BASIC ADD', () => {
  test('ADD: expect 1 + 2 === 3', () => {
    expect(add(1, 2)).toBe(3);
  });
});
