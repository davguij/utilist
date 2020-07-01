/**
 * Returns one or more items of an array picked at random.
 *
 * @packageDocumentation
 * @module sample
 */

import { random } from './random';
import { shuffle } from './shuffle';

/**
 * Returns a random element from an array.
 *
 * ```typescript
 * import { sampleOne } from 'utilist';
 *
 * sampleOne([1, 2, 3, 4, 5]); // returns a random element from 1 to 5.
 * ```
 *
 * @param elements The array to get a random element from.
 */
export function sampleOne<T>(elements: T[]): T {
  return elements[random(0, elements.length)];
}

/**
 * Returns `n` random elements from an array.
 *
 * ```typescript
 * import { sample } from 'utilist';
 * 
 * sample([1, 2, 3, 4, 5], 2); // returns an array with two random elements from 1 to 5.
 * ```

 * @param elements The array to get a random element from.
 * @param size The amount of elements to pick. Defaults to 1.
 */
export function sample<T>(elements: T[], size = 1): T[] {
  return shuffle<T>(elements).slice(0, size);
}
