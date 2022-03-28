import { parseInt } from 'lodash';

export type ParsedInput = Array<number | string>;

export const parseInput = (input: string): ParsedInput | null => {
  const result: ParsedInput = [];
  const inputParts = input.split(' ');

  for (const part of inputParts) {
    const parsedPart = parseInputPart(part);
    if (parsedPart === null) return null;
    result.push(...parsedPart);
  }

  return result;
};

export const parseInputPart = (inputPart: string): ParsedInput | null => {
  // single number
  if (/^-?\d+$/.test(inputPart)) return [parseInt(inputPart)];

  // binary operator
  if (/^[+-/*^]$/.test(inputPart)) return [inputPart];

  // unary operator
  const unaryOperatorMatches = inputPart.match(/^(-?\d+)(\*{2}|!)$/);
  if (unaryOperatorMatches !== null)
    return [parseInt(unaryOperatorMatches[1]), unaryOperatorMatches[2]];

  // unary function
  const unaryFunctionMatches = inputPart.match(
    /^(fib|sin|cos|tan)\((-?\d+)\)$/
  );
  if (unaryFunctionMatches !== null)
    return [parseInt(unaryFunctionMatches[2]), unaryFunctionMatches[1]];

  return null;
};
