// ES5

// var name = 'Kevin';
// var action = 'pouts';
//
// var obj = { name: name, action: action };
//
// console.log(obj);

// ES6

// const name = 'Sam';
// const action = 'lifts heavy stuff';
//
// const obj = { name, action };
//
// console.log(obj);

// You can also use short hand notation for variable key names

// ES5
// //
// var keyName = 'name'
// var name = 'Kevin'
//
// var obj = {
//   action: 'Pouts',
//   gender: 'Male'
// };
// obj[keyName] = name;
//
// console.log(obj);

// ES6
// const keyName = 'name';
// const name = 'Danny';
//
// const obj = {
//   action: 'Swims',
//   gender: 'Male',
//   [keyName]: name
// }
//
// console.log(obj)

// Methods are super easy to define now as well

// ES5

// var obj = {
//   name: 'Kevin',
//   findName: function() {
//     console.log(this.name + ' ' + this.action)
//   },
//   action: 'pouts'
// }
//
// obj.findName();

// ES6

// const obj = {
//   name: 'Kevin',
//   findName() {
//     console.log(`${this.name} ${this.action}`);
//   },
//   action: 'pouts'
// }
//
// obj.findName();
