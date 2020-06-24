/**
 * Assesses if the input is of the type Date.
 *
 * @remarks
 * Date entities are remarkably hard to identify safely in JavaScript.
 *
 * ```typescript
 * import { isDate } from 'utilist';
 *
 * isDate(new Date('2020-01-01')); // returns true
 * isDate('2020-01-01'); // returns false
 * ```
 *
 * @param input Any type of input is accepted.
 */
export function isDate(input: unknown): boolean {
  return (
    !!input &&
    Object.prototype.toString.call(input) === '[object Date]' &&
    !isNaN(input as number)
  );
}
