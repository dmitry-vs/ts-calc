import { parseInput } from '../parser/parser';
import { processParsedInput } from '../engine/engine';

export const enum RunnerErrors {
  ParseError = 'Введенное выражение имеет некорректный формат',
  CalculationError = 'Произошла ошибка при вычислении значения выражения',
}

export const USAGE =
  'Введите выражение для вычисления (например, "1 + 7 ^ 2 + sin(90)")';

export const processUserInput = (userInput: string): string => {
  const userInputTrimmed = userInput.trim();
  if (userInputTrimmed.length === 0) return USAGE;

  const parsedInput = parseInput(userInputTrimmed);
  if (parsedInput === null) return RunnerErrors.ParseError;

  const result = processParsedInput(parsedInput);
  if (result === null) return RunnerErrors.CalculationError;

  return `Результат: ${result.toString()}`;
};
