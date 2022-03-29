import { RunnerErrors, processUserInput, USAGE } from './runner';

describe('processUserInput', () => {
  test('correct input', () => {
    expect(processUserInput('1 + 2 * 5')).toBe('Результат: 11');
    expect(processUserInput('sin(90) + 15')).toBe('Результат: 16');
  });

  test('input ends or starts with space', () => {
    expect(processUserInput(' 123')).toBe('Результат: 123');
    expect(processUserInput('123  ')).toBe('Результат: 123');
  });

  test('parse error', () => {
    expect(processUserInput('some invalid string')).toBe(
      RunnerErrors.ParseError
    );
    expect(processUserInput('1+1')).toBe(RunnerErrors.ParseError);
  });

  test('calculation error', () => {
    expect(processUserInput('15 / 0')).toBe(RunnerErrors.CalculationError);
  });

  test('empty or whitespace input', () => {
    expect(processUserInput('')).toBe(USAGE);
    expect(processUserInput(' ')).toBe(USAGE);
    expect(processUserInput('  ')).toBe(USAGE);
  });
});
