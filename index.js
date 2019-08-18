module.exports = function sum(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  }
  return 'Values must be numbers';
};
