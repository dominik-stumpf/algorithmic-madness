import { describe, expect, it } from 'bun:test';
import { binarySearchRecursive, binarySearchWhileLoop } from './binary-search';

const searchAlgorithms = [binarySearchRecursive, binarySearchWhileLoop];

for (let i = 0; i < searchAlgorithms.length; i += 1) {
  const searchAlgorithm = searchAlgorithms[i];

  describe(searchAlgorithm.name, () => {
    it('should work if target is in array', () => {
      const sortedArray = [-1234, -1, 0, 2, 3, 3, 432, 9954];
      const target = 2;
      expect(searchAlgorithm(sortedArray, target)).toBe(3);
    });

    it('should work if target is in array', () => {
      const sortedArray = [-1234, -1, 0, 2, 3, 3, 432, 9954];
      const target = 2;
      expect(searchAlgorithm(sortedArray, target)).toBe(3);
    });

    it('should handle empty array', () => {
      const sortedArray: number[] = [];
      const target = 2;
      expect(searchAlgorithm(sortedArray, target)).toBe(-1);
    });

    it('should work if the array has one item and that is the target', () => {
      const sortedArray: number[] = [2];
      const target = 2;
      expect(searchAlgorithm(sortedArray, target)).toBe(0);
    });

    it('should work if the array has one item and that isnt the target', () => {
      const sortedArray: number[] = [2];
      const target = -992;
      expect(searchAlgorithm(sortedArray, target)).toBe(-1);
    });

    it('should return -1 for an element not in the array', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const target = 20;
      expect(searchAlgorithm(sortedArray, target)).toBe(-1);
    });

    it('should find last element', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const target = 10;
      expect(searchAlgorithm(sortedArray, target)).toBe(9);
    });

    it('should find first element', () => {
      const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const target = 1;
      expect(searchAlgorithm(sortedArray, target)).toBe(0);
    });

    it('shoud find element, even if there are multiple instances of it', () => {
      const sortedArray = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      const target = 2;
      const index = searchAlgorithm(sortedArray, target);
      expect(sortedArray[index]).toBe(target);
    });
  });
}
