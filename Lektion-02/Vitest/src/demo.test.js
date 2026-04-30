import { it, expect, describe } from 'vitest';
import { functions, shippingCost } from './demo';

describe('Test of math functions', () => {
  it('should return the sum of two numbers', () => {
    // A, A, A ...
    expect(functions.sum(10, 5)).toBe(15);
  });

  it('should return the result of two subtracted numbers', () => {
    // A, A, A ...
    expect(functions.subtract(10, 5)).toBe(5);
  });

  it('should return the product of two numbers', () => {
    // A, A, A ...
    expect(functions.multiply(2, 5)).toBe(10);
  });
});

describe('Another test suite', () => {
  it('should return true if item is in stock', () => {
    expect(functions.isInStock(1000)).toBeTruthy();
  });

  it('should return false if item is not in stock', () => {
    expect(functions.isInStock(100)).toBeFalsy();
  });
});

describe('Calculate shipping cost', () => {
  it.each([
    { weight: 0.5, expected: 100 },
    { weight: 1.5, expected: 125 },
    { weight: 8, expected: 225 },
    { weight: 18, expected: 500 },
    { weight: 28, expected: 750 },
  ])(
    'should be priced $expected for weight $weight kg',
    ({ weight, expected }) => {
      expect(shippingCost(weight)).toBe(expected);
    },
  );

  it.each([
    { weight: 1, expected: 100 },
    { weight: 5, expected: 125 },
    { weight: 10, expected: 225 },
    { weight: 20, expected: 500 },
    { weight: 21, expected: 750 },
  ])(
    'should calculate the correct price for each boundary: $weight -> $expected',
    ({ weight, expected }) => {
      expect(shippingCost(weight)).toBe(expected);
    },
  );

  it('should throw an exception if input value is not a number', () => {
    expect(() => shippingCost('xxx')).toThrow();
    expect(() => shippingCost('xxx')).toThrow(
      /vikten måste vara ett numeriskt värde/i,
    );
  });

  it('should return a value of type number', () => {
    expect(shippingCost(3)).toBeTypeOf('number');
  });

  it('should have no shippingcost when coupon used', () => {
    expect(shippingCost(0.5, 'Free')).toBe(0);
  });

  it('should throw an exception if coupon is not a string', () => {
    expect(() => shippingCost(1, 333)).toThrow();
    expect(() => shippingCost(1, null)).toThrow();
    expect(() => shippingCost(1, null)).toThrow(/kupong/i);
  });

  it('should throw an exception when weight i 0 or less', () => {
    expect(() => shippingCost(-1)).toThrow();
    expect(() => shippingCost(0)).toThrow();
  });
});
