const { sum } = require('./index');

test('should return sum of two numbers', () => {
  expect(sum(3, 5)).toBe(8);
});
