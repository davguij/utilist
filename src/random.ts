/**
 * Returns a random integer between a minimum and a maximum.
 *
 * ```typescript
 * import { random } from 'utilist';
 *
 * random(1, 10); // returns a random integer between 1 and 9
 * ```
 *
 * @remarks
 * This method does not provide cryptographically secure random numbers. Do not use them for anything related to security.
 *
 * @packageDocumentation
 * @module random
 */

/**
 * @param min The lower number of the range (always inclusive).
 * @param max The higher number of the range. Defaults to `min`.
 * @param isMaxInclusive Whether the higher number of the range should be inclusive or exclusive. Defaults to `false`.
 */
export function random(
  min: number,
  max: number = min,
  isMaxInclusive = false
): number {
  if (min > max) {
    min = max;
    max = min;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  const maxMin = isMaxInclusive === true ? max - min + 1 : max - min;
  return Math.floor(Math.random() * maxMin) + min;
}
