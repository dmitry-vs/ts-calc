import { findIndex, findLastIndex } from 'lodash';
import { ParsedInput } from '../parser/parser';
import {
  calculate,
  isMathOperator,
  isOperatorUnary,
  MathOperators,
  MAX_OPERATION_PRIORITY,
  OPERATORS_PRIORITY_LEVELS,
} from '../math/math';

export const processPriorityLevel = (
  parsedInput: ParsedInput | null,
  priorityLevel: number
): ParsedInput | null => {
  if (parsedInput === null || parsedInput.length === 0) return null;
  const result = Array.from(parsedInput);

  // порядок выполнения справа налево для операции возведения в степень
  const findIndexFunction =
    priorityLevel === OPERATORS_PRIORITY_LEVELS[MathOperators.Exponentiation]
      ? findLastIndex
      : findIndex;

  const operatorIndex = findIndexFunction(result, (item) => {
    if (typeof item !== 'string') return false;
    if (!isMathOperator(item)) return false;
    return OPERATORS_PRIORITY_LEVELS[item] === priorityLevel;
  });

  if (operatorIndex === -1) return result;
  const operator = result[operatorIndex] as string;
  if (!isMathOperator(operator)) return null;
  const firstOperand = result[operatorIndex - 1];
  if (typeof firstOperand !== 'number') return null;
  const operatorUnary = isOperatorUnary(operator);
  let operationResult: number | null;
  if (operatorUnary) {
    operationResult = calculate(firstOperand, operator);
  } else {
    const secondOperand = result[operatorIndex + 1];
    if (typeof secondOperand !== 'number') return null;
    operationResult = calculate(firstOperand, operator, secondOperand);
  }
  if (!Number.isFinite(operationResult)) return null;

  result.splice(operatorIndex - 1, operatorUnary ? 2 : 3, operationResult);
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
