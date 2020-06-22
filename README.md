# utilist

A modern utility library for JavaScript and TypeScript, both for the browser and for Node.js, that helps you solve routine tasks and common problems in a fast way, therefore letting you focus on what matters (building awesome stuff!)

## Why **utilist**

**utilist** is the spiritual successor of Underscore and Lodash, but it has been built in a time when ES6+ and the latest versions of the evergreen browsers and Node.js have effectively made redundant quite a big part of the functionality of those libraries.

With this in mind, **utilist** is:

- **lean**, as it only implements utilities that are still useful in the present times.
- **performant**, because it's modular and tree-shakeable, so you only add to your bundle those bytes that you're actually using.
- **reliable and safe**, for it's built without any external dependencies, and fully written in TypeScript.

## Installation

**Using npm**

`npm install utilist`

**Using yarn**

`yarn add utilist`

## Usage

**utilist** is exported in both CommonJS and ESM formats. This means you can import it with both `require` (mostly for Node.js environments) and `import` syntaxes.

### Example

```typescript
import { shuffle } from 'utilist'; // shuffles an array

shuffle<number>([1, 2, 3, 4, 5]); // returns [2, 5, 3, 4, 1]
```

### List of methods

- `difference()` — Takes two arrays and returns the difference between them as a new array. [See documentation.](https://davguij.github.io/utilist/modules/_difference_.html)
- `isDate()` — Assesses if the input is of the type Date. [See documentation.](https://davguij.github.io/utilist/modules/_is_date_.html)
- `isEqual()` — Compares two objects and returns whether their values are equivalent. [See documentation.](https://davguij.github.io/utilist/modules/_is_equal_.html)
- `occurrences()` — Counts the number of times that a substring appears in a string. [See documentation.](https://davguij.github.io/utilist/modules/_occurrences_.html)
- `omit()` — Removes a list of properties from an object. [See documentation.](https://davguij.github.io/utilist/modules/_omit_.html)
- `random()` — Generates a random integer between a minimum and a maximum. [See documentation.](https://davguij.github.io/utilist/modules/_random_.html)
- `sample()` and `sampleOne()` — Return one or more random elements from an array. [See documentation.](https://davguij.github.io/utilist/modules/_sample_.html)
- `shuffle()` — Shuffles an array. [See documentation.](https://davguij.github.io/utilist/modules/_shuffle_.html)
