import { random } from './random';

/**
 * Shuffles an array, i.e. returns a new array with same elements in a random order.
 *
 * ```typescript
 * import { shuffle } from 'utilist';
 *
 * shuffle([1, 2, 3, 4, 5]); // returns [2, 4, 1, 5, 3] (for example)
 * ```
 *
 * @remarks
 * - This method uses a version of the Fisher-Yates shuffle.
 * - This method does not mutate the array passed, but returns a new array instead.
 *
 * @param elements The array to be shuffled.
 */
export function shuffle<T>(elements: T[]): T[] {
  const result = [...elements];
  for (let index = 0; index < result.length; index++) {
    const newIndex = random(0, index, true);
    [result[index], result[newIndex]] = [result[newIndex], result[index]];
  }
  return result;
}
