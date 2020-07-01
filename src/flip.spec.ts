import { flip } from './flip';

describe('flip', () => {
  it('should return a new object', () => {
    const o = { key: true };
    expect(flip(o)).not.toBe(o);
  });

  it('should flip keys and values in all the properties of an object', () => {
    const o = { key: 'value', left: 'right' };
    const e = { value: 'key', right: 'left' };
    expect(flip(o)).toEqual(e);
  });

  it('should convert values to strings when swapping them', () => {
    const o = { boolean: true, integer: 1, array: [1, 2, 3] };
    const e = { true: 'boolean', '1': 'integer', '1,2,3': 'array' };
    expect(flip(o)).toEqual(e);
  });

  it('should do nothing to empty objects', () => {
    expect(flip({})).toEqual({});
  });
});
