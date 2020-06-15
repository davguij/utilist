import { isEqual } from './is-equal';

describe('isEqual', () => {
  it('should return true if two objects are deeply equal', () => {
    const o1 = {
      property: {
        nested: 'value',
      },
    };
    const o2 = { ...o1 };
    expect(isEqual(o1, o2)).toEqual(true);
  });

  it('should return false if two objects are not deeply equal', () => {
    const o1 = {
      property: {
        nested: 'value',
      },
    };
    const o2 = {
      property: {
        nested: 'different value',
      },
    };
    expect(isEqual(o1, o2)).toEqual(false);
  });

  it('should return false if two objects have different properties', () => {
    const o1 = { property1: 'value1' };
    const o2 = { property2: 'value2' };
    expect(isEqual<{ [key: string]: string }>(o1, o2)).toEqual(false);
  });

  it('should return true if properties are in different orders', () => {
    const o1 = {
      p1: 'v1',
      p2: 'v2',
    };
    const o2 = {
      p2: 'v2',
      p1: 'v1',
    };
    expect(isEqual(o1, o2)).toEqual(true);
  });

  it('should work if properties are undefined or null', () => {
    const o1 = { p1: undefined, p2: null };
    const o2 = { ...o1 };
    expect(isEqual(o1, o2)).toEqual(true);
  });

  it("should return false if one object has a property that the other doesn't have", () => {
    const o1 = { p1: false };
    const o2 = {};
    const oo1 = {};
    const oo2 = { p1: false };

    expect(isEqual(o1, o2)).toEqual(false);
    expect(isEqual(oo1, oo2)).toEqual(false);
  });

  it('should work with arrays', () => {
    const o1 = { name: 'John', childs: ['Smith', 'Steve', 'Trent'] };
    const o2 = { ...o1 };

    const oo1 = { name: 'John', childs: ['Smith', 'Steve', 'Trent'] };
    const oo2 = { name: 'John', childs: ['Steve', 'Trent', 'Smith'] };

    expect(isEqual(o1, o2)).toEqual(true);

    expect(isEqual(oo1, oo2)).toEqual(false);
  });

  it('works when comparing Dates', () => {
    const nowOne = { date: new Date() };
    const nowTwo = { date: new Date() };
    expect(isEqual(nowOne, nowTwo)).toEqual(true);

    const pastOne = { date: new Date('2020-01-01') };
    const pastTwo = { date: new Date('2020-01-02') };

    expect(isEqual(pastOne, pastTwo)).toEqual(false);
  });
});
