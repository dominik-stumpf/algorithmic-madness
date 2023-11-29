export function binarySearchRecursive(
  sortedArray: number[],
  target: number,
): number {
  if (sortedArray.length === 1) {
    return sortedArray[0] === target ? 0 : -1;
  }

  let lowPointer = 0;
  let highPointer = sortedArray.length - 1;

  function recursion() {
    const mid = Math.floor((lowPointer + highPointer) / 2);
    const midValue = sortedArray[mid];

    if (lowPointer > highPointer) {
      return -1;
    }

    if (target === midValue) {
      return mid;
    }

    if (target > midValue) {
      lowPointer = mid + 1;
      return recursion();
    }

    highPointer = mid - 1;
    return recursion();
  }

  return recursion();
}

export function binarySearchWhileLoop(
  sortedArray: number[],
  target: number,
): number {
  let lowPointer = 0;
  let highPointer = sortedArray.length - 1;

  while (lowPointer <= highPointer) {
    const mid = Math.floor((lowPointer + highPointer) / 2);
    const midValue = sortedArray[mid];

    if (midValue === target) {
      return mid;
    }
    if (midValue < target) {
      lowPointer = mid + 1;
    } else {
      highPointer = mid - 1;
    }
  }

  return -1;
}
