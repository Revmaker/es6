// ES5

function noDefaults(name, action) {
  if (!name) name = 'Kevin';
  if (!action) action = 'pout';
  return name + ' likes to ' + action + '.';
}

console.log(noDefaults())
console.log(noDefaults('Ted', 'run'));

// ES6

// function defaults(name = 'Kevin', action = 'pout') {
//   return `${name} likes to ${action}.`
// }
//
// console.log(noDefaults())
// console.log(noDefaults('Martin', 'eat ketchup'));
