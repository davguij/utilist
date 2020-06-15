export function isDate(input: unknown): boolean {
  return (
    !!input &&
    Object.prototype.toString.call(input) === '[object Date]' &&
    !isNaN(input as number)
  );
}
