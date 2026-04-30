export const functions = {
  sum: (x, y) => x + y,
  subtract: (x, y) => x - y,
  multiply: (x, y) => x * y,
  isInStock: (itemNumber) => {
    if (itemNumber > 999) return true;
    return false;
  },
};

export const shippingCost = (weight, coupon = '') => {
  if (typeof weight !== 'number')
    throw new Error('Vikten måste vara ett numeriskt värde');

  if (typeof coupon !== 'string') throw new Error('Kupong måste vara text');

  if (weight <= 0) throw new Error('Vikten måste vara större än 0');

  if (coupon.toUpperCase() === 'FREE') return 0;

  if (weight <= 1) return 100;
  if (weight <= 5) return 125;
  if (weight <= 10) return 225;
  if (weight <= 20) return 500;

  return 750;
};
