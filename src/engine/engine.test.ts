import { processParsedInput, processPriorityLevel } from './engine';
import { PriorityLevels } from '../math/math';

describe('processPriorityLevel', () => {
  test('single item', () => {
    expect(processPriorityLevel([1], PriorityLevels.Zero)).toEqual([1]);
    expect(processPriorityLevel(['+'], PriorityLevels.Zero)).toBeNull();
  });

  test('single operation', () => {
    expect(processPriorityLevel([1, '+', 2], PriorityLevels.Zero)).toEqual([3]);
  });

  test('multiple operations', () => {
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

  test('first and second priority operations', () => {
    expect(
      processPriorityLevel([1, '+', 2, '*', 3, '+', 1], PriorityLevels.One)
    ).toEqual([1, '+', 6, '+', 1]);
  });
});

describe('processParsedInput', () => {
  test('multiply with add and subtract', () => {
    expect(processParsedInput([1, '*', 2, '+', 3, '-', 1])).toEqual(4);
    expect(processParsedInput([1, '+', 2, '*', 3, '+', 1])).toEqual(8);
    expect(processParsedInput([1, '-', 2, '+', 3, '*', 10])).toEqual(29);
  });

  test('divide with add and subtract', () => {
    expect(processParsedInput([10, '/', 5, '+', 3, '-', 1])).toEqual(4);
    expect(processParsedInput([10, '-', 6, '/', 3, '+', 1])).toEqual(9);
    expect(processParsedInput([1, '-', 2, '+', 30, '/', 10])).toEqual(2);
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
