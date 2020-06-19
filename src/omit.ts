import { GenericObject } from './interfaces/generics';

/**
 * Takes an object and a list of properties to remove, and returns a new object equal to the original one but the listed properties removed.
 *
 * @remark
 * Currently nested properties are not supported.
 *
 * @param source The original object to remove the properties from.
 * @param properties An array of property names to be removed.
 */

export function omit<T extends GenericObject>(source: T, properties: string[]) {
  // @ts-ignore
  let omitted: any;
  let rest: GenericObject = { ...source };
  for (const property of properties) {
    ({ [property]: omitted, ...rest } = rest);
  }
  return rest;
}
