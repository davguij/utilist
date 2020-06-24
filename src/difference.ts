import { isEqual } from './is-equal';

/**
 * Takes two arrays and returns the difference between them as a new array.
 * In this case, "difference" is to be understood as the elements of one array not present in the other.
 *
 * ```typescript
 * import { difference } from 'utilist';
 *
 * difference([1, 2, 3], [1, 3]); // returns [2]
 * ```
 *
 * @param first First array.
 * @param second Second array.
 */

export function difference<T>(first: T[], second: T[]): T[] {
  if (isEqual(first, second)) {
    return [];
  }

  if (second.length > first.length) {
    [second, first] = [first, second];
  }
  return first.filter(f => !second.some(s => isEqual(f, s)));
}
