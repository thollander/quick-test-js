const assert = require('assert');
const todo = _ => {};

/* npm test to start */

/* ex1 (add / at the beginning to do the first exercice)
// Implem the ex1 function that double even numbers and triple odd ones
const ex1 = todo;
assert.deepStrictEqual([1, 2, 3].map(ex1), [3, 4, 9]);
console.log('ð Ex1 OKð ');

/* ex2
// Implem the ex2 function that do the same thing than ex1 but output in string
const ex2 = todo;
assert.deepStrictEqual([1, 2, 3].map(ex2), ['3', '4', '9']);
console.log('ð Ex2 OKð ');

/* ex3
// Implem a pipe function in order to make the test below pass;
const pipe = () => todo;
const ex3 = pipe(
  ex1,
  x => x.toString()
);
assert.deepStrictEqual([1, 2, 3].map(ex3), ['3', '4', '9']);
console.log('ð Ex3 OKð ');

/* ex4
// fix editY2 implementation
const obj1 = { x: { y: 1 } }
const obj2 = { x: obj1.x }

function editY2(x) {
  obj2.x.y = x
}

editY2(2)
assert.strictEqual(obj1.x.y, 1)
assert.strictEqual(obj2.x.y, 2)
console.log('ð Ex4 OKð ');

/*
 * Thanks
 */
