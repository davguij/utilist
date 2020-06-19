import { occurrences } from './occurrences';

describe('occurrences', () => {
  it('should count one character occurrences in a string', () => {
    expect(occurrences('mississippi', 'i')).toBe(4);
  });

  it('should count substring occurrences in a string', () => {
    expect(occurrences('mississippi', 'ssi')).toBe(2);
  });

  it('should return zero if any argument is an empty string', () => {
    expect(occurrences('', 'e')).toBe(0);
    expect(occurrences('mississippi', '')).toBe(0);
  });
});
