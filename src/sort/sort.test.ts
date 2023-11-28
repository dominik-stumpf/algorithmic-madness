import { describe, expect, it } from 'bun:test';
import { bubbleSort } from './bubble-sort';

describe('bubbleSort', () => {
  it('should correctly sort an array of positive numbers in ascending order', () => {
    const unsortedArray = [5, 3, 8, 4, 2];
    const sortedArray = bubbleSort([...unsortedArray]);
    expect(sortedArray).toEqual([2, 3, 4, 5, 8]);
  });

  it('should correctly sort an array of whole numbers in ascending order', () => {
    const unsortedArray = [0, -1, 5, 3, -43, 8, 4, 2];
    const sortedArray = bubbleSort([...unsortedArray]);
    expect(sortedArray).toEqual([-43, -1, 0, 2, 3, 4, 5, 8]);
  });

  it('should correctly sort an array of whole repeating numbers in ascending order', () => {
    const unsortedArray = [0, -1, 5, 0, 0, 3, -43, 8, 4, 2, 0, 2];
    const sortedArray = bubbleSort([...unsortedArray]);
    expect(sortedArray).toEqual([-43, -1, 0, 0, 0, 0, 2, 2, 3, 4, 5, 8]);
  });

  it('should handle an empty array', () => {
    const emptyArray: number[] = [];
    const sortedArray = bubbleSort([...emptyArray]);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with one element', () => {
    const singleElementArray = [42];
    const sortedArray = bubbleSort([...singleElementArray]);
    expect(sortedArray).toEqual([42]);
  });
});
