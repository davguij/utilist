/**
 * Generates a key mirror (also known as key-value mirror), which is  an object where for each property, the key is the same as the value.
 *
 * ```typescript
 * import { mirror } from 'utilist';
 *
 * mirror(['one', 'two']); // returns { one: 'one', two: 'two' };
 * mirror({ one: null, two: 'value' }); // returns { one: 'one', two: 'two' };
 * ```
 * @packageDocumentation
 * @module mirror
 */

/**
 * @param source Either an array of strings or an object from where to pick the mirrored keys and values. If it's an object, the values will be overwritten.
 */

export function mirror(source: string[]): { [key: string]: string };
export function mirror<T, K extends keyof T>(source: T): { [key: string]: K };
export function mirror(source: any): any {
  const result: { [key: string]: string } = {};
  if (source instanceof Array) {
    for (const item of source) {
      result[item] = item;
    }
  } else {
    for (const key in source) {
      if (source.hasOwnProperty(key)) {
        result[key] = key;
      }
    }
  }
  return result;
}
