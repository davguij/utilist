/**
 * Creates an array of elements split into subarrays the length of `size`. If `elements` can't be split evenly, the final chunk will be the remaining elements.
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
