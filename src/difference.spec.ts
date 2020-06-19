import { difference } from './difference';

describe('difference', () => {
  it('should return a new array the difference between two arrays', () => {
    const a = ['a', 'b', 'c', 'd'];
    const b = ['b', 'c'];
    const e = ['a', 'd'];

    expect(difference(a, b)).toEqual(e);
  });

  it('should support second array being bigger than first', () => {
    const a = ['b', 'c'];
    const b = ['a', 'b', 'c', 'd'];
    const e = ['a', 'd'];

    expect(difference(a, b)).toEqual(e);
  });

  it('should return empty array if both input arrays are equal', () => {
    const a = ['a', 'b', 'c', 'd'];
    const b = [...a];
    expect(difference(a, b)).toEqual([]);
  });

  it('should support arrays of objects', () => {
    const a = [{ first: 'first', second: 'second' }, { third: 'third' }];
    const b = [{ third: 'third' }];
    const e = [{ first: 'first', second: 'second' }];

    expect(difference(a, b)).toEqual(e);
  });
});
