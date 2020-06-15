import { GenericObject } from './interfaces/generics';
import { isDate } from './is-date';

export function isEqual<T extends GenericObject>(
  firstObject: T,
  secondObject: T
): boolean {
  for (const key in firstObject) {
    if (secondObject.hasOwnProperty(key) === false) {
      return false;
    }
    const e1 = firstObject[key];
    const e2 = secondObject[key];
    if (typeof e1 !== typeof e2) {
      return false;
    } else if (typeof e1 === 'object') {
      // Dates are also "objects", so we need to check first if elements are date
      // and compare their values if they are
      if (isDate(e1) && isDate(e2) && e1.getTime() !== e2.getTime()) {
        return false;
      } else if (isEqual(e1, e2) === false) {
        return false;
      }
    } else if (e1 !== e2) {
      return false;
    }
  }

  for (const key in secondObject) {
    if (firstObject.hasOwnProperty(key) === false) {
      return false;
    }
  }
  return true;
}
