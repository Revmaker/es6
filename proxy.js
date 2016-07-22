// const target = {};
// const handler = {
//   get: function (receiver, name) {
//     return `Hello, ${name}!`;
//   }
// };
//
// const p = new Proxy(target, handler);
// console.log(p.world, p.kevin, p.pouts)

// 
// const target = function () { return 'I am the target'; };
// const handler = {
//   apply: function (receiver, ...args) {
//     return `I am the proxy. \n receiver: ${receiver} \n args: ${args}`;
//   }
// };
//
// const p = new Proxy(target, handler);
// console.log( p('Kevin Pouts') );
