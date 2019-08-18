function sum(...numbers) {
  if (numbers.every(n => typeof n === 'number')) {
    return numbers.reduce((acc, item) => acc + item, 0);
  }
  throw new Error('Contains invalid number');
}

module.exports = {
  sum,
};
