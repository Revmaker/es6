// const and let are the new ways to declare variables

// const is a constant in memory. This identifier cannot be reassigned, however, it can perform prototypical methods on itself
const arr = [1,2,3]

arr = 'hello' // throws an error
arr = [4,5,6] // throws an error
//
// arr.push(4) // this is acceptable JS
//
// console.log(arr);

// let str = 'Kevin pouts'
//
// console.log(str);
//
// str = 'Kevin pouts some more'
//
// console.log(str);
//
// str = {
//   kevin: 'still pouts'
// }
//
// console.log(str);

// they are block scoped and are not hoisted;

// console.log('someVar:', someVar)
//
// var someVar = 'stuff'
//
// console.log('someVar:', someVar)

// console.log(someConst, someLet)
//
// const someConst = 'Kevin is a real pouter'
// let someLet = 'Stop it Kevin'
// console.log('someConst:', someConst,'someLet:', someLet)

// console.log(i, 'before loop')
//
// for (var i = 0, i < 2; i++) {
//   console.log(i)
// }
//
// console.log(i, 'after loop')

// console.log(i, 'before loop') // throws error
//
// for (let i = 0, i < 2; i++) {
//   console.log(i)
// }
//
// console.log(i, 'after loop') //throws error
