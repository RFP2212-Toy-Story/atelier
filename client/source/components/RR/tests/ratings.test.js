import * as helpers from '../utilities/helpers.js';

describe('Ratings calculations', () => {
  test('count returns total rating count', () => {
    const ratings = {
      1: '7',
      2: '9',
      3: '5',
      4: '13',
      5: '5'
    };
    const result = helpers.count(ratings);
    expect(result).toBe(39);
  });

  test('percentages returns an array of subarrays with rating and percentage of total', () => {
    const ratings = {
      1: '7',
      2: '9',
      3: '5',
      4: '13',
      5: '5'
    };
    const result = helpers.percentages(ratings);
    const expected = [['1', 18], ['2', 23], ['3', 13], ['4', 33], ['5', 13]];
    expect(result).toStrictEqual(expected);
  });

  test('recommended returns a number that represents the percentage of reviewers who recommend the product', () => {
    const votes = {
      false: '8',
      true: '31'
    };
    const result = helpers.recommended(votes);
    expect(result).toBe(79);
  });
});
