import { parseInput, parseInputPart } from './parser';

describe('parseInput', () => {
  test('single number', () => {
    expect(parseInput('123')).toEqual([123]);
    expect(parseInput('0')).toEqual([0]);
    expect(parseInput('-123')).toEqual([-123]);
  });

  test('unary operators', () => {
    expect(parseInput('4**')).toEqual([4, '**']);
    expect(parseInput('5!')).toEqual([5, '!']);
  });

  test('unary functions', () => {
    expect(parseInput('fib(3)')).toEqual([3, 'fib']);
    expect(parseInput('sin(90)')).toEqual([90, 'sin']);
    expect(parseInput('cos(0)')).toEqual([0, 'cos']);
    expect(parseInput('tan(180)')).toEqual([180, 'tan']);
  });

  test('binary operators', () => {
    expect(parseInput('1 + 2')).toEqual([1, '+', 2]);
    expect(parseInput('1 - 2')).toEqual([1, '-', 2]);
    expect(parseInput('1 * 2')).toEqual([1, '*', 2]);
    expect(parseInput('1 / 2')).toEqual([1, '/', 2]);
    expect(parseInput('1 ^ 2')).toEqual([1, '^', 2]);
  });

  test('operators combinations', () => {
    expect(parseInput('sin(90) + fib(10) - 5! / 2**')).toEqual([
      90,
      'sin',
      '+',
      10,
      'fib',
      '-',
      5,
      '!',
      '/',
      2,
      '**',
    ]);
  });

  test('incorrect input', () => {
    expect(parseInput('')).toBeNull();
    expect(parseInput(' ')).toBeNull();
    expect(parseInput('1 ')).toBeNull();
    expect(parseInput(' 1')).toBeNull();
    expect(parseInput('test')).toBeNull();
  });
});

describe('parseInputPart', () => {
  test('number', () => {
    expect(parseInputPart('4')).toEqual([4]);
    expect(parseInputPart('0')).toEqual([0]);
    expect(parseInputPart('-10')).toEqual([-10]);
  });

  test('binary operator', () => {
    expect(parseInputPart('+')).toEqual(['+']);
    expect(parseInputPart('-')).toEqual(['-']);
    expect(parseInputPart('*')).toEqual(['*']);
    expect(parseInputPart('/')).toEqual(['/']);
    expect(parseInputPart('^')).toEqual(['^']);
  });

  test('unary operator', () => {
    expect(parseInputPart('4**')).toEqual([4, '**']);
    expect(parseInputPart('4!')).toEqual([4, '!']);
  });

  test('unary function', () => {
    expect(parseInputPart('fib(7)')).toEqual([7, 'fib']);
    expect(parseInputPart('sin(90)')).toEqual([90, 'sin']);
    expect(parseInputPart('cos(-90)')).toEqual([-90, 'cos']);
    expect(parseInputPart('tan(0)')).toEqual([0, 'tan']);
  });

  test('unknown string', () => {
    expect(parseInputPart('')).toBeNull();
    expect(parseInputPart(' ')).toBeNull();
    expect(parseInputPart('test')).toBeNull();
  });
});
