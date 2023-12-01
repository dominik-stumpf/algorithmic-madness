/** O(n*log(n)) */
export function findKLargestNumberSort(array: number[], k: number): number[] {
  return array.sort((a, b) => a - b).slice(Math.max(0, array.length - k));
}

function findIndexOfSmallestNumber(array: number[]) {
  let smallestIndex = 0;
  let smallestNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= smallestNumber) {
      smallestNumber = array[i];
      smallestIndex = i;
    }
  }

  return smallestIndex;
}

/** O(n*log(k)), retains original array form */
export function findKLargestNumberCache(array: number[], k: number): number[] {
  if (k === 0) return [];
  const cache = [];

  for (let i = 0; i < array.length; i += 1) {
    const val = array[i];
    if (cache.length < k) {
      cache.push(val);
      continue;
    }
    const rIndex = findIndexOfSmallestNumber(cache);
    if (cache[rIndex] < val) {
      delete cache[rIndex];
      cache.push(val);
    }
  }

  return cache;
}
