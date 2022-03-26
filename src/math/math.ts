export enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
  Exponentiation = '^',
}

export const enum PriorityLevels {
  Zero,
  One,
  Two,
}

export const OPERATORS_PRIORITY_LEVELS = {
  [MathOperators.Addition]: PriorityLevels.Zero,
  [MathOperators.Subtraction]: PriorityLevels.Zero,
  [MathOperators.Multiplication]: PriorityLevels.One,
  [MathOperators.Division]: PriorityLevels.One,
  [MathOperators.Exponentiation]: PriorityLevels.Two,
};

export const MAX_OPERATION_PRIORITY = Math.max(
  ...Object.values(OPERATORS_PRIORITY_LEVELS)
);

export const calculate = (
  firstOperand: number,
  operation: string,
  secondOperand: number
): number | null => {
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
    default: {
      return null;
    }
  }
};
