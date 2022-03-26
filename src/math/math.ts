export const enum MathOperators {
  Addition = '+',
  Subtraction = '-',
  Multiplication = '*',
  Division = '/',
}

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
