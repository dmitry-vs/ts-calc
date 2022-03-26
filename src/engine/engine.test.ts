import { process } from './engine';

describe('process', () => {
  test('single item', () => {
    expect(process([1])).toBe(1);
    expect(process(['+'])).toBe(null);
  });

  test('single operation', () => {
    expect(process([1, '+', 2])).toBe(3);
  });

  test('multiple operations', () => {
    expect(process([1, '+', 2, '-', 5])).toBe(-2);
  });

  test('no items', () => {
    expect(process([])).toBe(null);
  });

  test('double items', () => {
    expect(process([1, '+'])).toBe(null);
    expect(process([1, 2])).toBe(null);
  });
});
