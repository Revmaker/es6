
// can now destructure objects and arrays to assign values to variables

// ES5

var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];

// console.log('a', a, 'b', b, 'c', c);

// ES6
// const arr = [4, 5, 6];
//
// const [a, b, c] = arr;
//
// console.log('a', a, 'b', b, 'c', c);
//
// const [d, e, f] = [7, 'Kevin Pouts', 9]
//
// console.log('d', d, 'e', e, 'f', f);
//
// let [g, h] = [10, 11]
//
// console.log(g, h);
//
// [g, h] = [h, g]
//
// console.log(g, h);
//
// ES5
//
// var obj = {
//   name: 'Kevin',
//   action: 'Pouts',
// }
//
// var name = obj.name,
//     action = obj.action;
//
// console.log(name, action);

// ES6
//
// const obj = {
//   name: 'Ted',
//   action: 'Doesn\'t Pout'
// }
//
// const { name, action } = obj;
//
// console.log(name, action)

// can also handle nesting

// const obj = {
//   user: {
//     name: 'Ted',
//     info: {
//       gender: 'Male',
//       location: 'LA'
//     }
//   },
//   type: 'admin'
// }
//
// const { user: { name },
//         type,
//         user: {
//            info: { location }
//          }
//        } = obj;
//
// console.log(name, type, location);

// also useful (but sometimes confusing) with functions
//
// function arrayDestructuring ([ name, action ]) {
//     console.log(name, action)
// }
// function objectDestructuringAssignment ({ name: n, action: a }) {
//     console.log(n, a)
// }
// function objectDestructuring ({ name, action }) {
//     console.log(name, action)
// }
// arrayDestructuring([ "Kevin", 'Pouts' ])
// objectDestructuringAssignment({ name: "Ted", action:  'Runs' })
// objectDestructuring({ name: "Marissa", action: 'Eats' })
