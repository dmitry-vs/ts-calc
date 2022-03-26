import { calculate, isMathOperator, MathOperators } from './math';

describe('calculate', () => {
  test('addition', () => {
    expect(calculate(1, MathOperators.Addition, 10)).toBe(11);
  });

  test('subtraction', () => {
    expect(calculate(1, MathOperators.Subtraction, 2)).toBe(-1);
  });

  test('multiplication', () => {
    expect(calculate(5, MathOperators.Multiplication, 3)).toBe(15);
  });

  test('division', () => {
    expect(calculate(10, MathOperators.Division, 5)).toBe(2);
  });

  test('exponentiation', () => {
    expect(calculate(2, MathOperators.Exponentiation, 5)).toBe(32);
  });

  test('squaring', () => {
    expect(calculate(2, MathOperators.Squaring)).toBe(4);
  });

  test('missing operator', () => {
    expect(calculate(1, MathOperators.Addition)).toBe(null);
  });
});

describe('isMathOperator', () => {
  test('correct operator', () => {
    expect(isMathOperator('+')).toBe(true);
  });
});
