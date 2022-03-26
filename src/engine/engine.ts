import { ParsedInput } from '../parser/parser';
import {
  calculate,
  MathOperators,
  MAX_OPERATION_PRIORITY,
  OPERATORS_PRIORITY_LEVELS,
  PriorityLevels,
} from '../math/math';

export const processPriorityLevel = (
  parsedInput: ParsedInput | null,
  priorityLevel: PriorityLevels
): ParsedInput | null => {
  if (parsedInput === null || parsedInput.length === 0) return null;
  const result = Array.from(parsedInput);

  const operatorIndex = result.findIndex((item) => {
    if (typeof item !== 'string') return false;
    if (!Object.values(MathOperators).includes(item as MathOperators))
      return null;
    const priority = OPERATORS_PRIORITY_LEVELS[item as MathOperators];
    return priority === priorityLevel;
  });

  if (operatorIndex === -1) return result;
  const firstOperand = result[operatorIndex - 1];
  const operator = result[operatorIndex] as string;
  const secondOperand = result[operatorIndex + 1];
  if (typeof firstOperand !== 'number' || typeof secondOperand !== 'number')
    return null;

  result.splice(
    operatorIndex - 1,
    3,
    calculate(firstOperand, operator, secondOperand)
  );

  return processPriorityLevel(result, priorityLevel);
};

export const processParsedInput = (parsedInput: ParsedInput): number | null => {
  let result = Array.from(parsedInput);

  for (let i = MAX_OPERATION_PRIORITY; i >= 0; i--) {
    result = processPriorityLevel(result, i);
    if (result === null) return null;
    if (result.length === 1) {
      const resultItem = result[0];
      return typeof resultItem === 'number' ? resultItem : null;
    }
  }

  return null;
};
