export enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  Exponentiation = '^',
  Squaring = '**',
  Factorial = '!',
  Fibonacci = 'fib',
  Sin = 'sin',
  Cos = 'cos',
  Tan = 'tan',
}

export const OPERATORS_PRIORITY_LEVELS = {
  [MathOperators.Addition]: 0,
  [MathOperators.Subtraction]: 0,
  [MathOperators.Multiplication]: 1,
  [MathOperators.Division]: 1,
  [MathOperators.Exponentiation]: 2, // Отдельный приоритет для возведения в степень, т.к. порядок выполнения справа налево
  [MathOperators.Squaring]: 3,
  [MathOperators.Factorial]: 3,
  [MathOperators.Fibonacci]: 3,
  [MathOperators.Sin]: 3,
  [MathOperators.Cos]: 3,
  [MathOperators.Tan]: 3,
};

export const MAX_OPERATION_PRIORITY = Math.max(
  ...Object.values(OPERATORS_PRIORITY_LEVELS)
);

const OPERATORS_OPERANDS_COUNT = {
  [MathOperators.Addition]: 2,
  [MathOperators.Subtraction]: 2,
  [MathOperators.Multiplication]: 2,
  [MathOperators.Division]: 2,
  [MathOperators.Exponentiation]: 2,
  [MathOperators.Squaring]: 1,
  [MathOperators.Factorial]: 1,
  [MathOperators.Fibonacci]: 1,
  [MathOperators.Sin]: 1,
  [MathOperators.Cos]: 1,
  [MathOperators.Tan]: 1,
};

export const isOperatorUnary = (operator: MathOperators) =>
  OPERATORS_OPERANDS_COUNT[operator] === 1;

export const isMathOperator = (value: string): value is MathOperators =>
  Object.values(MathOperators).includes(value as MathOperators);

export const calculate = (
  firstOperand: number,
  operation: MathOperators,
  secondOperand?: number
): number | null => {
  if (!isOperatorUnary(operation) && secondOperand === undefined) return null;

  switch (operation) {
    case MathOperators.Addition: {
      return firstOperand + secondOperand;
    }
    case MathOperators.Subtraction: {
      return firstOperand - secondOperand;
    }
    case MathOperators.Multiplication: {
      return firstOperand * secondOperand;
    }
    case MathOperators.Division: {
      // TODO: корректная обработка дробных чисел
      if (secondOperand === 0) return 0;
      return firstOperand / secondOperand;
    }
    case MathOperators.Exponentiation: {
      return Math.pow(firstOperand, secondOperand);
    }
    case MathOperators.Squaring: {
      return Math.pow(firstOperand, 2);
    }
    case MathOperators.Factorial: {
      return factorial(firstOperand);
    }
    case MathOperators.Fibonacci: {
      return fibonacci(firstOperand);
    }
    case MathOperators.Sin: {
      return sin(firstOperand);
    }
    case MathOperators.Cos: {
      return cos(firstOperand);
    }
    case MathOperators.Tan: {
      return tan(firstOperand);
    }
  }
};

export const factorial = (value: number): number | null => {
  if (value < 0 || !Number.isInteger(value)) return null;
  if (value === 0 || value === 1) return value;
  return value * factorial(value - 1);
};

export const fibonacci = (value: number): number | null => {
  if (value < 0 || !Number.isInteger(value)) return null;
  if (value === 0) return 0;
  if (value === 1) return 1;
  return fibonacci(value - 1) + fibonacci(value - 2);
};

const degreesToRadians = (degrees: number) => (degrees * Math.PI) / 180;

export const sin = (value: number): number | null => {
  return Math.sin(degreesToRadians(value));
};

export const cos = (value: number): number | null => {
  return Math.cos(degreesToRadians(value));
};

export const tan = (value: number): number | null => {
  return Math.tan(degreesToRadians(value));
};
