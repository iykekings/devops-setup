const { sum } = require('./index');

test('should return sum of two numbers', () => {
  expect(sum(3, 5)).toBe(8);
});

test('should return sum of three numbers', () => {
  expect(sum(3, 4, 5)).toBe(12);
});

test('should return sum of spread array of numbers', () => {
  expect(sum(...[1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(55);
});
