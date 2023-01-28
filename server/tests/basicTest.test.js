const add = require('./basicTest');

test('ADD: expect 1 + 2 === 3', () => {
  console.log(add(1, 2));
  expect(add(1, 2)).toBe(3);
});
