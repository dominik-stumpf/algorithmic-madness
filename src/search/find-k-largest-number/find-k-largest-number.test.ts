import { describe, expect, it } from 'bun:test';
import * as algorithms from './find-k-largest-number';

function sortAscending(unsortedArray: number[]): number[] {
  return unsortedArray.sort((a, b) => a - b);
}

for (const [algorithmName, algorithm] of Object.entries(algorithms)) {
  describe(algorithmName, () => {
    it('should find the k largest element', () => {
      const unsortedArray = [2, 4, 211, 1, 0, 0, 88493];
      const subarrayLength = 3;

      expect(sortAscending(algorithm(unsortedArray, subarrayLength))).toEqual([
        4, 211, 88493,
      ]);
    });

    it('should handle empty array', () => {
      const unsortedArray: number[] = [];
      const subarrayLength = 3;

      expect(sortAscending(algorithm(unsortedArray, subarrayLength))).toEqual(
        [],
      );
    });

    it('should handle k as zero', () => {
      const unsortedArray: number[] = [3290, 43333, 0, 0, -342];
      const subarrayLength = 0;

      expect(sortAscending(algorithm(unsortedArray, subarrayLength))).toEqual(
        [],
      );
    });

    it('should handle larger k than array length', () => {
      const unsortedArray: number[] = [3290, 43333, 0, 0, -342];
      const subarrayLength = 9;

      expect(sortAscending(algorithm(unsortedArray, subarrayLength))).toEqual(
        sortAscending(unsortedArray),
      );
    });
  });
}
