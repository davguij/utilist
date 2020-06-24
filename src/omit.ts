/**
 * Takes an object and a list of properties to remove, and returns a new object equal to the original one but the listed properties removed.
 *
 * ```typescript
 * import { omit } from 'utilist';
 *
 * omit({ prop1: 'stays', prop2: 'leaves' }, ['prop2']); // returns { prop1: 'stays' }
 * ```
 *
 * @remark
 * Currently nested properties are not supported.
 *
 * @param source The original object to remove the properties from.
 * @param properties An array of property names to be removed.
 */

export function omit<T, K extends keyof T>(source: T, properties: K[]) {
  // @ts-ignore
  let omitted: any;
  let rest = { ...source };
  for (const property of properties) {
    ({ [property]: omitted, ...rest as Omit<T, K> } = rest);
  }
  return rest;
}
