import {
  calculate,
  cos,
  factorial,
  fibonacci,
  isMathOperator,
  MathOperators,
  sin,
  tan,
} from './math';

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
    expect(calculate(5, MathOperators.Factorial)).toBe(120);
  });

  test('fibonacci', () => {
    expect(calculate(3, MathOperators.Fibonacci)).toBe(2);
  });

  test('sin', () => {
    expect(calculate(0, MathOperators.Sin)).toBe(0);
  });

  test('cos', () => {
    expect(calculate(0, MathOperators.Cos)).toBe(1);
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
  });
});

describe('factorial', () => {
  test('value is zero', () => {
    expect(factorial(0)).toBe(0);
  });

  test('value is one', () => {
    expect(factorial(1)).toBe(1);
  });

  test('value is more than one', () => {
    expect(factorial(5)).toBe(120);
  });

  test('value is negative', () => {
    expect(factorial(-5)).toBeNull();
  });

  test('value is not integer', () => {
    expect(factorial(4.5)).toBeNull();
  });
});

describe('fibonacci', () => {
  test('value is zero', () => {
    expect(fibonacci(0)).toBe(0);
  });

  test('value is one', () => {
    expect(fibonacci(1)).toBe(1);
  });

  test('value is more than one', () => {
    expect(fibonacci(2)).toBe(1);
    expect(fibonacci(3)).toBe(2);
    expect(fibonacci(4)).toBe(3);
  });

  test('value is negative', () => {
    expect(fibonacci(-1)).toBeNull();
  });

  test('value is not integer', () => {
    expect(fibonacci(4.5)).toBeNull();
  });
});

describe('sin', () => {
  test('value is zero', () => {
    expect(sin(0)).toBe(0);
  });

  test('value is 90 degrees', () => {
    expect(sin(90)).toBe(1);
  });

  test('value is -90 degrees', () => {
    expect(sin(-90)).toBe(-1);
  });
});

describe('cos', () => {
  test('value is zero', () => {
    expect(cos(0)).toBe(1);
  });

  test('value is 180 degrees', () => {
    expect(cos(180)).toBe(-1);
  });

  test('value is -180 degrees', () => {
    expect(cos(-180)).toBe(-1);
  });
});

describe('tan', () => {
  test('value is zero', () => {
    expect(tan(0)).toBe(0);
  });
});
