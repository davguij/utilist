import { mapValues } from './map-values';

describe('mapValues', () => {
  it('should apply the callback to every value of the source', () => {
    const o = {
      one: 1,
      two: 2,
      three: 3,
      four: 4,
    };
    const e = {
      one: 2,
      two: 4,
      three: 6,
      four: 8,
    };
    const result = mapValues(o, item => item + item);
    expect(result).toEqual(e);
  });

  it('should support strings', () => {
    const o = { one: 'one' };
    const e = { one: 'ONE' };
    const result = mapValues(o, item => item.toUpperCase());
    expect(result).toEqual(e);
  });
});
