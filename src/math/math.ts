export enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
}

export const enum PriorityLevels {
  Zero,
  One,
}

export const OPERATORS_PRIORITY_LEVELS = {
  [MathOperators.Addition]: PriorityLevels.Zero,
  [MathOperators.Subtraction]: PriorityLevels.Zero,
  [MathOperators.Multiplication]: PriorityLevels.One,
  [MathOperators.Division]: PriorityLevels.One,
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
      return firstOperand / secondOperand;
    }
    default: {
      return null;
    }
  }
};
