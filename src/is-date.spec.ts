import { isDate } from './is-date';

describe('isDate', () => {
  it('should return true if input is a date', () => {
    expect(isDate(new Date('2020-01-01'))).toEqual(true);
  });

  it('should return false if input is not a date', () => {
    expect(isDate('2020-01-01')).toEqual(false);
    expect(isDate(undefined)).toEqual(false);
    expect(isDate(null)).toEqual(false);
  });
});
