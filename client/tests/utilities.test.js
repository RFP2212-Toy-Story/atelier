import average from '../source/utilities/helpers.js';

describe('UTILITIES: general helpers and such', () => {
  test('average calculates averate rating with single decimal', () => {
    const ratings = {
      1: '1',
      2: '0',
      3: '0',
      4: '0',
      5: '1'
    };
    const result = average(ratings);
    expect(result).toBe('3.0');
  });
});
