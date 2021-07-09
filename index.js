const assert = require('assert');
const todo = _ => {};

/* npm test to start */

/* ex1 (add / at the beginning to do the first exercice)
// Implem the ex1 function that double even numbers and triple odd ones
const ex1 = todo;
assert.deepStrictEqual([1, 2, 3].map(ex1), [3, 4, 9]);
console.log('🎉 Ex1 OK🎉 ');

/* ex2
// Implem the ex2 function that do the same thing than ex1 but output in string
const ex2 = todo;
assert.deepStrictEqual([1, 2, 3].map(ex2), ['3', '4', '9']);
console.log('🎉 Ex2 OK🎉 ');

/* ex3
// Implem a pipe function in order to make the test below pass;
const pipe = () => todo;
const ex3 = pipe(
  ex1,
  x => x.toString()
);
assert.deepStrictEqual([1, 2, 3].map(ex3), ['3', '4', '9']);
console.log('🎉 Ex3 OK🎉 ');

/*
 * Thanks
 */
