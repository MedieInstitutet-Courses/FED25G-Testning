const { math, shippingCost } = require('./demo');

describe('Test of math functions', () => {
  it('should return the sum of two numbers', () => {
    // A, A, A ...
    expect(math.sum(10, 5)).toBe(15);
  });

  it('should return the result of two subtracted numbers', () => {
    // A, A, A ...
    expect(math.subtract(10, 5)).toBe(5);
  });

  it('should return the product of two numbers', () => {
    // A, A, A ...
    expect(math.multiply(2, 5)).toBe(10);
  });
});

describe('Another test suite', () => {
  it('should return true if item is in stock', () => {
    expect(math.isInStock(1000)).toBeTruthy();
  });

  it('should return false if item is not in stock', () => {
    expect(math.isInStock(100)).toBeFalsy();
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
    expect(typeof shippingCost(3)).toBe('number');
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
