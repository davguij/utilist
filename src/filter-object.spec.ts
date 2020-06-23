import { filterByValue } from './filter-object';

describe('filterByValue', () => {
  it('should return a new object', () => {
    const o = { key: true };
    expect(filterByValue(o, v => v)).not.toBe(o);
  });

  it('should include only the properties with values that pass the callback fn', () => {
    const o = { a: 1, b: 2, c: 3 };
    const e = { a: 1, b: 2 };
    const f = filterByValue(o, v => {
      return v <= 2;
    });
    expect(f).toEqual(e);
  });

  it('should support an empty object', () => {
    expect(filterByValue({}, v => v)).toEqual({});
  });

  it('should not support an array, and should just return the same array', () => {
    expect(filterByValue([], _v => true)).toEqual([]);
    expect(filterByValue([1], _v => true)).toEqual([1]);
  });
});
