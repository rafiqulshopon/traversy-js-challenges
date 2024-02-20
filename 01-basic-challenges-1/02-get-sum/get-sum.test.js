const getSum = require('./get-sum');

// Test various input types and combinations:
test('Sums positive integers correctly', () => {
  const num1 = 5;
  const num2 = 7;
  expect(getSum(num1, num2)).toBe(12);
});

test('Sums negative integers correctly', () => {
  const num1 = -5;
  const num2 = -7;
  expect(getSum(num1, num2)).toBe(-12);
});

test('Sums zero with a positive integer', () => {
  const num1 = 0;
  const num2 = 7;
  expect(getSum(num1, num2)).toBe(7);
});

test('Sums zero with a negative integer', () => {
  const num1 = 0;
  const num2 = -7;
  expect(getSum(num1, num2)).toBe(-7);
});

test('Sums large numbers correctly', () => {
  const num1 = 1000000;
  const num2 = 2000000;
  expect(getSum(num1, num2)).toBe(3000000);
});
