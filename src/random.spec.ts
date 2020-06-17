import { random } from './random';

describe('random', () => {
  it('should default to an exclusive max', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(0, 1));
    }
    const notZero = results.find(item => item !== 0);
    expect(notZero).toBeUndefined();
  });

  it('should support an inclusive max', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(0, 1, true));
    }
    const notInRange = results.find(item => item < 0 || item > 1);
    expect(notInRange).toBeUndefined();
  });

  it('should support large integer values', () => {
    const min = Math.pow(2, 31);
    const max = Math.pow(2, 62);
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(min, max, true));
    }
    const notInRange = results.find(item => item < min || item > max);
    expect(notInRange).toBeUndefined();
  });

  it('still works if min is higher than max', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(10, 0));
    }
    const notInRange = results.find(item => item < 0 || item > 9);
    expect(notInRange).toBeUndefined();
  });

  it('supports negative min and max', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(-10, -1));
    }
    const notInRange = results.find(item => item < -10 || item > -2);
    expect(notInRange).toBeUndefined();
  });

  it('supports same value for min and max', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(1, 1));
    }
    const notInRange = results.find(item => item !== 1);
    expect(notInRange).toBeUndefined();
  });

  it('supports receiving only a min argument', () => {
    const results = [];
    for (let index = 0; index < 1000; index++) {
      results.push(random(1));
    }
    const notInRange = results.find(item => item !== 1);
    expect(notInRange).toBeUndefined();
  });
});
