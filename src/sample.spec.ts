import { sampleOne, sample } from './sample';

describe('sampleOne', () => {
  it('should return a sample element from an array', () => {
    const arr = Array.from(Array(1000), (_, i) => i);
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(sampleOne(arr));
    }
    const notInArray = results.find(result => arr.includes(result) === false);
    expect(notInArray).toBeUndefined();
  });

  it('should return undefined if the input is an empty array', () => {
    const arr: any[] = [];
    expect(sampleOne(arr)).toBeUndefined();
  });
});

describe('sample', () => {
  it('should support specifying the size of the sample', () => {
    const arr = Array.from(Array(1000), (_, i) => i);
    expect(sample(arr, 10).length).toEqual(10);
  });

  it('should use the array length if the requested size is higher', () => {
    const arr = Array.from(Array(10), (_, i) => i);
    expect(sample(arr, 1000).length).toEqual(10);
  });
});
