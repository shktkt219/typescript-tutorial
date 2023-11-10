// let greet = () => {
//   console.log('hello world');
// }

let greet: Function;

// greet = 'hello';

greet = () => {
  console.log('hello, again')
}

greet();

const add = (a: number, b: number, c:number|string = 10): void => {
  console.log(a + b);
  console.log(c);
}

add(5, 10, '20');

const minus = (a: number, b: number): number => {
  console.log(a + b);
}

minus(10, 7);
