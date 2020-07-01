/**
 * Returns a new object identical to the `source` object, but with the key and the value swapped on each of its own enumerable properties.
 *
 * ```typescript
 * import { flip } from 'utilist';
 *
 * flip({ key: 'value', left: 'right' }); // returns { value: 'key', right: 'left' }
 * ```
 *
 * @remark Does not mutate the original object.
 *
 * @packageDocumentation
 * @module flip
 */

/**
 * @param source The object of which the keys and the values should be swapped.
 */

export function flip<T extends {}>(source: T) {
  const result: { [key: string]: string } = {};
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const element = source[key];
      result[String(element)] = key;
    }
  }
  return result;
}
