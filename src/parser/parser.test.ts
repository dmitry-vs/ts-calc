import { parseInput } from './parser';

describe('parseInput', () => {
  test('correct input with single operator', () => {
    expect(parseInput('1 + 2')).toEqual([1, '+', 2]);
  });

  test('correct input with multiple operators', () => {
    expect(parseInput('1 + 2 * 10')).toEqual([1, '+', 2, '*', 10]);
  });

  test('incorrect input', () => {
    expect(parseInput('')).toBe(null);
    expect(parseInput(' ')).toBe(null);
    expect(parseInput('1 ')).toBe(null);
    expect(parseInput(' 1')).toBe(null);
  });
});
