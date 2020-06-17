import { random } from './random';

/**
 * Shuffles an array, using a version of the Fisher-Yates shuffle.
 *
 * @remarks
 * This method does not mutate the array passed, but returns a new array instead.
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
