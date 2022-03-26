import { ParsedInput } from '../parser/parser';
import { calculate } from '../math/math';

export const process = (parsedInput: ParsedInput): number | null => {
  if (parsedInput.length === 0 || typeof parsedInput[0] !== 'number')
    return null;

  if (parsedInput.length === 1) return parsedInput[0];
  if (parsedInput.length === 2) return null;

  const [firstOperand, operator] = [parsedInput[0], parsedInput[1]];
  if (typeof operator !== 'string') return null;

  const secondOperandGroup = parsedInput.slice(2);
  const secondOperand = process(secondOperandGroup);
  return typeof secondOperand === 'number'
    ? calculate(firstOperand, operator, secondOperand)
    : null;
};
