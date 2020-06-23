/**
 * Returns a new object identical to the `source` object, but without the entries for which the function `fn` returns false.
 *
 * @param source Object to filter.
 * @param fn Function used to filter each value. Needs to return a boolean.
 */

export function filterByValue<T, K extends keyof T>(
  source: T,
  fn: (value: T[K]) => boolean
) {
  if (Array.isArray(source)) {
    return source;
  }
  const o = Object.keys(source)
    .filter(key => fn(source[key as K]))
    .map(key => ({ [key]: source[key as K] }));
  return Object.assign({}, ...o);
}
