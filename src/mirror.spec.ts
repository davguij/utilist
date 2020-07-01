import { mirror } from './mirror';

describe('mirror', () => {
  it('should accept an array of strings to build the mirrored object', () => {
    expect(mirror(['one', 'two', 'three'])).toEqual({
      one: 'one',
      two: 'two',
      three: 'three',
    });
  });

  it('should accept an object to build the mirrored object', () => {
    const o = { one: null, two: undefined, three: 'value' };
    const e = {
      one: 'one',
      two: 'two',
      three: 'three',
    };
    expect(mirror(o)).toEqual(e);
  });
});
