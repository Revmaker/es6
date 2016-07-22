// Rest parameter

// ES5

// function es5Args() {
//   var args = Array.prototype.slice.call(arguments);
//   console.log(args);
// }
//
// es5Args('Kevin', 'Pouts', true)
//
// // ES6
//
// function es6Args(...args) {
//   console.log(args);
// }
//
// es6Args('Sam', 'Swims', false);
//
// // you can also specify only certain arguments
//
// // ES5
// function firstTwoES5(a, b) {
//   var args = Array.prototype.slice.call(arguments, 2);
//   console.log('a', a);
//   console.log('b', b);
//   console.log('args', args);
// }
//
// firstTwoES5('Kevin', 'Pouts', [1, 2, 3], true, 'turkey')
//
// // ES6
//
// function firstTwoES6(a, b, ...args) {
//   console.log('a', a);
//   console.log('b', b);
//   console.log('args', args);
// }
//
// firstTwoES6('Ted', 'Sleeps', [4, 5, 6], true, 'chicken');

// spread operator

// ES5

// function myFunction(x, y, z) {
//   console.log(x, y, z);
// }
// var arr = [0, 1, 2];
// myFunction.apply(null, arr);

// ES6
// const arr = [4, 5, 6];
//
// function myFunction(x, y, z) {
//   console.log(x, y, z);
// }
// myFunction(...arr);
//
// // another example
//
// const max = Math.max(...arr); // vs Math.max.apply(null, arr);
//
// console.log(max);
//
// // can also be used in literals
//
// const newArr = [...arr, 7, 8, 9];
// console.log(newArr)
