import { random } from './random';
import { shuffle } from './shuffle';

/**
 * Returns a random element from an array.
 *
 * @param elements The array to get a random element from.
 */
export function sampleOne<T>(elements: T[]): T {
  return elements[random(0, elements.length)];
}

/**
 * Returns `n` random elements from an array.
 *
 * @param elements The array to get a random element from.
 * @param size The amount of elements to pick.
 */
export function sample<T>(elements: T[], size = 1): T[] {
  return shuffle<T>(elements).slice(0, size);
}
