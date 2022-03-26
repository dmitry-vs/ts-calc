import { processParsedInput, processPriorityLevel } from './engine';
import { PriorityLevels } from '../math/math';

describe('processPriorityLevel', () => {
  test('single item', () => {
    expect(processPriorityLevel([1], PriorityLevels.Zero)).toEqual([1]);
    expect(processPriorityLevel(['+'], PriorityLevels.Zero)).toBeNull();
  });

  test('single operation priority 0', () => {
    expect(processPriorityLevel([1, '+', 2], PriorityLevels.Zero)).toEqual([3]);
  });

  test('multiple operations priority 0', () => {
    expect(
      processPriorityLevel([1, '+', 2, '-', 5], PriorityLevels.Zero)
    ).toEqual([-2]);
  });

  test('no items', () => {
    expect(processPriorityLevel([], PriorityLevels.Zero)).toBeNull();
  });

  test('double items', () => {
    expect(processPriorityLevel([1, '+'], PriorityLevels.Zero)).toBeNull();
  });

  test('priority 1 operations', () => {
    expect(
      processPriorityLevel([1, '+', 2, '*', 3, '+', 1], PriorityLevels.One)
    ).toEqual([1, '+', 6, '+', 1]);
    expect(
      processPriorityLevel([1, '+', 4, '/', 2, '+', 1], PriorityLevels.One)
    ).toEqual([1, '+', 2, '+', 1]);
  });

  test('priority 2 operation', () => {
    expect(
      processPriorityLevel([1, '+', 2, '^', 5, '-', 1], PriorityLevels.Two)
    ).toEqual([1, '+', 32, '-', 1]);
    expect(
      processPriorityLevel([3, '*', 2, '^', 5, '/', 6], PriorityLevels.Two)
    ).toEqual([3, '*', 32, '/', 6]);
  });
});

describe('processParsedInput', () => {
  test('multiplication', () => {
    expect(processParsedInput([1, '*', 2, '+', 3, '-', 1])).toEqual(4);
    expect(processParsedInput([1, '+', 2, '*', 3, '+', 1])).toEqual(8);
    expect(processParsedInput([1, '-', 2, '+', 3, '*', 10])).toEqual(29);
  });

  test('division', () => {
    expect(processParsedInput([10, '/', 5, '+', 3, '-', 1])).toEqual(4);
    expect(processParsedInput([10, '-', 6, '/', 3, '+', 1])).toEqual(9);
    expect(processParsedInput([1, '-', 2, '+', 30, '/', 10])).toEqual(2);
  });

  test('exponentiation', () => {
    expect(processParsedInput([2, '^', 5, '-', 7])).toEqual(25);
    expect(processParsedInput([7, '-', 5, '^', 2])).toEqual(-18);
    expect(processParsedInput([2, '^', 5, '/', 16])).toEqual(2);
    expect(processParsedInput([2, '*', 2, '^', 5])).toEqual(64);
    expect(processParsedInput([2, '*', 2, '^', 5, '+', 1])).toEqual(65);
  });

  test('missing operands', () => {
    expect(processParsedInput([1, '+'])).toBeNull();
    expect(processParsedInput(['+', 1])).toBeNull();
    expect(processParsedInput(['+'])).toBeNull();
  });

  test('missing operators', () => {
    expect(processParsedInput([1, 2])).toBeNull();
    expect(processParsedInput([1, 2, 3])).toBeNull();
  });
});
