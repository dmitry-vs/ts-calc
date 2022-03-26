export enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  Exponentiation = '^',
  Squaring = '**',
  Factorial = '!',
}

export const OPERATORS_PRIORITY_LEVELS = {
  [MathOperators.Addition]: 0,
  [MathOperators.Subtraction]: 0,
  [MathOperators.Multiplication]: 1,
  [MathOperators.Division]: 1,
  [MathOperators.Exponentiation]: 2, // Отдельный приоритет для возведения в степень, т.к. порядок выполнения справа налево
  [MathOperators.Squaring]: 3,
  [MathOperators.Factorial]: 3,
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
  }
};

export const factorial = (value: number): number | null => {
  if (value < 0 || !Number.isInteger(value)) return null;
  if (value === 0 || value === 1) return value;
  return value * factorial(value - 1);
};
