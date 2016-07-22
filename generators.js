

function* colorGenerator(color) {
  yield `${color} and orange.`;
  yield `${color} and red.`;
  color += ', yellow';
  yield `${color} and green`;
}

const colors = colorGenerator('blue');

console.log(colors);
console.log(colors.next());
console.log(colors.next());

for(let i = 0; i < 5; i++) {
  console.log(i)
}
// if i want the values the syntax works as such
console.log(colors.next().value);

// notice that the done key is now 'true';
console.log(colors.next())
