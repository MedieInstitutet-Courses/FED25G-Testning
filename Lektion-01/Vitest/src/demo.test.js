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
  it('should calculate correct price for each weight', () => {
    expect(shippingCost(1)).toBe(100);
    expect(shippingCost(1.5)).toBe(125);
    expect(shippingCost(7)).toBe(225);
    expect(shippingCost(15)).toBe(500);
    expect(shippingCost(30)).toBe(750);
  });

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
});
