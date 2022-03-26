export type ParsedInput = Array<number | string>;

export const parseInput = (input: string): ParsedInput | null => {
  const result: ParsedInput = [];
  const inputParts = input.split(' ');

  for (const part of inputParts) {
    if (!part || part.trim() !== part) return null;
    const partNum = parseInt(part);
    result.push(isNaN(partNum) ? part : partNum);
  }

  return result;
};
