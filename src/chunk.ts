/**
 * Creates an array of elements split into subarrays the length of `size`. If `elements` can't be split evenly, the final chunk will contain the remaining elements.
 *
 * ```typescript
 * import { chunk } from 'utilist';
 *
 * chunk([0, 1, 2, 3, 4, 5], 4); // returns [[0, 1, 2, 3], [4, 5]]
 * ```
 *
 * @param elements The array to split.
 * @param size The amount of elements in each subarrays.
 */

export function chunk<T>(elements: T[], size = 1) {
  size = size > 0 ? size : 1;
  const result: T[][] = [];
  let index = 0;
  while (index < elements.length) {
    result.push(elements.slice(index, size + index));
    index += size;
  }
  return result;
}
