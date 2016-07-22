
// New arrow functions can be used in lieu of annonymous functions

// ES5
//
var evens = [2, 4, 6, 8];

var odds  = evens.map(function (v) { return v + 1; });
var pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
var nums  = evens.map(function (v, i) { return v + i; });

console.log('ODDS:', odds)
console.log('PAIRS:', pairs)
console.log('NUMS:', nums)

// // ES 6
//
// const evens = [2, 4, 6, 8]
//
// const odds  = evens.map(num => num + 1)
// const pairs = evens.map(num => ({ even: num, odd: num + 1 }))
// const nums  = evens.map((num, i) => num + i)
//
// console.log('ODDS:', odds)
// console.log('PAIRS:', pairs)
// console.log('NUMS:', nums)


// When arrow functions are one line, it will automatically return the expression on that line. For example, in the odds, it will return v + 1
// If you want to return multiple lines, you may use a parenthesis

// const nums = [5, 10, 11, 15, 21]
//
// const fives = nums.reduce((prev, curr) => {
//   if (curr % 5 === 0) return curr + prev;
//   return prev;
// })
//
// const other = nums.map(num => (
//   num
//     +
//       1 // notice no semicolon can be used when returning multiple lines with a parenthesis
// ))
//
// console.log(fives, other);

// Arrow functions also have lexical scoping, unlike regular functions

// ES5

//
// function Person() {
//   this.age = 0;
//
//   setInterval(function growUp() {
//     this.age++;
//   }, 1);
//
//   this.findAge = function(){ console.log(this.age) }
// }
//
// var p = new Person();
//
// p.findAge();
// setTimeout(p.findAge, 1000);
// setTimeout(p.findAge, 2000);
// p.findAge();


// ES6

// function Person() {
//   this.age = 0;
//
//   setInterval(() => {
//     this.age++;
//   }, 1);
//
//   this.findAge = () => console.log(this.age);
// }
//
// var p = new Person();
//
// p.findAge();
// setTimeout(p.findAge, 1000);
// setTimeout(p.findAge, 2000);
