import { bench, group, run } from 'mitata';
import * as algorithms from './find-k-largest-number';

const largeUnsortedArray = Array.from(
  { length: 2 ** 20 },
  () => ((Math.random() - 0.5) * 2 ** 15) | 0,
);
const largeK = 2 ** 8;

group({ name: 'findKLargestNumber', summary: false }, () => {
  for (const [algorithmName, algorithm] of Object.entries(algorithms)) {
    bench(algorithmName, () => algorithm(largeUnsortedArray, largeK));
  }
});

await run({
  avg: true, // enable/disable avg column (default: true)
  json: false, // enable/disable json output (default: false)
  colors: true, // enable/disable colors (default: true)
  min_max: true, // enable/disable min/max column (default: true)
  collect: false, // enable/disable collecting returned values into an array during the benchmark (default: false)
  percentiles: false, // enable/disable percentiles column (default: true)
});
