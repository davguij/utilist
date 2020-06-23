import { omit } from './omit';

describe('omit', () => {
  it('should return a new object', () => {
    const o = { key: true };
    expect(omit(o, ['key'])).not.toBe(o);
  });

  it('should return an equal object, but without the passed property', () => {
    expect(omit({ prop1: 'stays', prop2: 'leaves' }, ['prop2'])).toEqual({
      prop1: 'stays',
    });
  });

  it('should support removing several properties in one function call', () => {
    const o = { prop1: 'leaves', prop2: 'stays', prop3: 'leaves' };
    const e = { prop2: 'stays' };
    const result = omit(o, ['prop1', 'prop3']);
    expect(result).toEqual(e);
  });

  it('should do nothing if the passed property is not found in the source', () => {
    const o: { [key: string]: any } = {
      prop1: 'stays',
      prop2: 'stays',
      prop3: 'stays',
    };
    const e = { ...o };
    const result = omit(o, ['notFoundProp']);
    expect(result).toEqual(e);
  });
});
