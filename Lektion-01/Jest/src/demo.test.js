// const functions = require('./demo');
import functions from './demo';

test('should return the sum of two numbers', () => {
  // Arrange...
  const x = 10;
  const y = 8;

  // Act...
  const result = functions.sum(x, y);

  // Assert...
  expect(result).toBe(18);
});

test('should return the result of subtracting two number', () => {
  // Arrange, act...
  const result = functions.subtract(10, 5);
  // Assert...
  expect(result).toBe(5);
});
