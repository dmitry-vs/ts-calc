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
    expect(calculate(10, MathOperators.Division, 0)).toBeNull();
  });

  test('exponentiation', () => {
    expect(calculate(2, MathOperators.Exponentiation, 5)).toBe(32);
  });

  test('squaring', () => {
    expect(calculate(2, MathOperators.Squaring)).toBe(4);
  });

  test('factorial', () => {
    expect(calculate(0, MathOperators.Factorial)).toBe(0);
    expect(calculate(1, MathOperators.Factorial)).toBe(1);
    expect(calculate(5, MathOperators.Factorial)).toBe(120);
    expect(calculate(-5, MathOperators.Factorial)).toBeNull();
    expect(calculate(4.5, MathOperators.Factorial)).toBeNull();
  });

  test('fibonacci', () => {
    expect(calculate(0, MathOperators.Fibonacci)).toBe(0);
    expect(calculate(1, MathOperators.Fibonacci)).toBe(1);
    expect(calculate(2, MathOperators.Fibonacci)).toBe(1);
    expect(calculate(3, MathOperators.Fibonacci)).toBe(2);
    expect(calculate(4, MathOperators.Fibonacci)).toBe(3);
    expect(calculate(-1, MathOperators.Fibonacci)).toBeNull();
    expect(calculate(4.5, MathOperators.Fibonacci)).toBeNull();
  });

  test('sin', () => {
    expect(calculate(0, MathOperators.Sin)).toBe(0);
    expect(calculate(90, MathOperators.Sin)).toBe(1);
    expect(calculate(-90, MathOperators.Sin)).toBe(-1);
  });

  test('cos', () => {
    expect(calculate(0, MathOperators.Cos)).toBe(1);
    expect(calculate(180, MathOperators.Cos)).toBe(-1);
    expect(calculate(-180, MathOperators.Cos)).toBe(-1);
  });

  test('tan', () => {
    expect(calculate(0, MathOperators.Tan)).toBe(0);
  });

  test('missing operator', () => {
    expect(calculate(1, MathOperators.Addition)).toBe(null);
  });
});

describe('isMathOperator', () => {
  test('correct operator', () => {
    expect(isMathOperator('+')).toBe(true);
    expect(isMathOperator('-')).toBe(true);
  });

  test('incorrect operator', () => {
    expect(isMathOperator('_')).toBe(false);
    expect(isMathOperator('$')).toBe(false);
  });
});
