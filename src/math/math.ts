export enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  Exponentiation = '^',
  Squaring = '**',
}

export const OPERATORS_PRIORITY_LEVELS = {
  [MathOperators.Addition]: 0,
  [MathOperators.Subtraction]: 0,
  [MathOperators.Multiplication]: 1,
  [MathOperators.Division]: 1,
  [MathOperators.Exponentiation]: 2,
  [MathOperators.Squaring]: 3,
};

export const MAX_OPERATION_PRIORITY = Math.max(
  ...Object.values(OPERATORS_PRIORITY_LEVELS)
);

const UNARY_OPERATORS = [MathOperators.Squaring];

export const isOperatorUnary = (operator: MathOperators) =>
  UNARY_OPERATORS.includes(operator);

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
  }
};
