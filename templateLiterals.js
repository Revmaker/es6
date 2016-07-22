// template literals are a more elegant way of handling string concatinations

// // ES5
var name = 'Kevin';
var action = 'pout';
var str = 'Hello my name is ' + name + ', and I like to ' + action + '.';

console.log(str);

//ES6
// const name = 'Sam';
// const action = 'run';
// const str = `Hello my name is ${name}, and I like to ${action}.`;
//
// console.log(str);

// anything inbetween the ${} must be valid javascript

// function sentenceGenerator(name, action) {
//   return `Hello my name is ${name}, and I like to ${action}.`
// }
//
// const foods = ['McDonald\'s','TGI Fridays', 'Burger King']
//
// const str = `${sentenceGenerator('Jesse', 'rock climb')} I also like to eat ${foods.join(', ')}.`
//
// console.log(str);
