/**
 * Assesses if the input is of the type Date.
 *
 * @remarks
 * Date entities are remarkably hard to identify safely in JavaScript.
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
