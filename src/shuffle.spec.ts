import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('should return a new array', () => {
    const arr = ['a', 'b', 'c', 'd', 'z'];
    const shuffled = shuffle(arr);
    expect(shuffled).toBeInstanceOf(Array);
    expect(shuffled.sort()).not.toBe(arr.sort());
  });

  it('should not change the amount of elements', () => {
    const arr = ['a', 'b', 'c', 'd', 'z'];
    expect(shuffle(arr).length).toEqual(arr.length);
  });

  it('should return the same elements, but shuffled', () => {
    const arr = ['a', 'b', 'c', 'd', 'z'];
    expect(shuffle(arr).sort()).toEqual(arr.sort());
  });

  it('should return an empty array if the input is as empty array', () => {
    expect(shuffle([])).toEqual([]);
  });
});
