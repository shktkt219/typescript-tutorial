"use strict";
// let greet = () => {
//   console.log('hello world');
// }
let greet;
// greet = 'hello';
greet = () => {
    console.log('hello, again');
};
greet();
const add = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, '20');
const minus = (a, b) => {
    console.log(a + b);
};
minus(10, 7);
