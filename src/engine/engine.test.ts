import { processParsedInput, processPriorityLevel } from './engine';

describe('processPriorityLevel', () => {
  test('single item', () => {
    expect(processPriorityLevel([1], 0)).toEqual([1]);
    expect(processPriorityLevel(['+'], 0)).toBeNull();
  });

  test('single operation priority 0', () => {
    expect(processPriorityLevel([1, '+', 2], 0)).toEqual([3]);
  });

  test('multiple operations priority 0', () => {
    expect(processPriorityLevel([1, '+', 2, '-', 5], 0)).toEqual([-2]);
  });

  test('no items', () => {
    expect(processPriorityLevel([], 0)).toBeNull();
  });

  test('double items', () => {
    expect(processPriorityLevel([1, '+'], 0)).toBeNull();
  });

  test('priority 1 operations', () => {
    expect(processPriorityLevel([1, '+', 2, '*', 3, '+', 1], 1)).toEqual([
      1,
      '+',
      6,
      '+',
      1,
    ]);
    expect(processPriorityLevel([1, '+', 4, '/', 2, '+', 1], 1)).toEqual([
      1,
      '+',
      2,
      '+',
      1,
    ]);
  });

  test('priority 2 operation', () => {
    expect(processPriorityLevel([1, '+', 2, '^', 5, '-', 1], 2)).toEqual([
      1,
      '+',
      32,
      '-',
      1,
    ]);
    expect(processPriorityLevel([3, '*', 2, '^', 5, '/', 6], 2)).toEqual([
      3,
      '*',
      32,
      '/',
      6,
    ]);
    expect(processPriorityLevel([2, '^', 2, '^', 3], 2)).toEqual([256]);
  });

  test('priority 3 operation', () => {
    expect(processPriorityLevel([1, '+', 5, '**'], 3)).toEqual([1, '+', 25]);
    expect(processPriorityLevel([5, '**', '+', 1], 3)).toEqual([25, '+', 1]);
    expect(processPriorityLevel([2, '*', 5, '**'], 3)).toEqual([2, '*', 25]);
    expect(processPriorityLevel([5, '**', '*', 2], 3)).toEqual([25, '*', 2]);
    expect(processPriorityLevel([2, '^', 5, '**'], 3)).toEqual([2, '^', 25]);
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

  test('squaring', () => {
    expect(processParsedInput([7, '**', '+', 1])).toBe(50);
    expect(processParsedInput([1, '+', 7, '**'])).toBe(50);
    expect(processParsedInput([7, '**', '+', 2, '*', 5])).toBe(59);
    expect(processParsedInput([2, '^', 5, '+', 7, '**'])).toBe(81);
  });

  test('factorial', () => {
    expect(processParsedInput([5, '!'])).toBe(120);
    expect(processParsedInput([-1, '+', 5, '!'])).toBe(119);
    expect(processParsedInput([5, '!', '*', 2])).toBe(240);
  });

  test('fibonacci', () => {
    expect(processParsedInput([3, 'fib'])).toBe(2);
    expect(processParsedInput([5, '!', '+', 3, 'fib'])).toBe(122);
  });

  test('sin', () => {
    expect(processParsedInput([90, 'sin'])).toBe(1);
    expect(processParsedInput([1, '+', -90, 'sin'])).toBe(0);
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
