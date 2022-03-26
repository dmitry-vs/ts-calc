import { calculate } from './math';

describe('calculate', () => {
  test('addition', () => {
    expect(calculate(1, '+', 10)).toBe(11);
  });

  test('subtraction', () => {
    expect(calculate(1, '-', 2)).toBe(-1);
  });

  test('multiplication', () => {
    expect(calculate(5, '*', 3)).toBe(15);
  });

  test('division', () => {
    expect(calculate(10, '/', 5)).toBe(2);
  });

  test('unknown operator', () => {
    expect(calculate(1, '_', 2)).toBe(null);
  });
});
