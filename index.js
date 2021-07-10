const assert = require('assert');
const noop = _ => {};

/* npm test to start */

/* ex1 (add a / at the beginning of this line to do the first exercice)
// Implem the ex1 function that doubles even numbers and triple odd ones
const ex1 = noop;
assert.deepStrictEqual([1, 2, 3].map(ex1), [3, 4, 9]);
console.log('🎉 Ex1 OK🎉 ');

/* ex2
// Implem the ex2 function that does the same thing than ex1 but output in string
const ex2 = noop;
assert.deepStrictEqual([1, 2, 3].map(ex2), ['3', '4', '9']);
console.log('🎉 Ex2 OK🎉 ');

/* ex3
// Implem a pipe function in order to make the test below pass;
const pipe = () => noop;
const ex3 = pipe(
  ex1,
  x => x.toString()
);
assert.deepStrictEqual([1, 2, 3].map(ex3), ['3', '4', '9']);
console.log('🎉 Ex3 OK🎉 ');

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
console.log('🎉 Ex4 OK🎉 ');

/*
 * Thanks
 */
