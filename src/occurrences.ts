/**
 * Returns the number of times that a substring `search` appears in a string `input`.
 *
 * ```typescript
 * import { occurrences } from 'utilist';
 *
 * occurrences('mississippi', 'i'); // returns 4
 * occurrences('mississippi', 'ssi'); // returns 2
 * ```
 *
 * @param input The string to search in.
 * @param search The substring to be searched.
 */

export function occurrences(input: string, search: string): number {
  if (input === '' || search === '') {
    return 0;
  }
  return (input.match(new RegExp(search, 'g')) || []).length;
}
