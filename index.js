// console.log("Hello world");
// "abc".toUpperCase()[(1, 2, 3, 4)].push[4];
// function myFunction(msg) {
//   console.log("Welcome to Aapna college");
//   console.log("We are learning JS");
// }
// myFunction();

// create a function that is used to add two numbers
// function sum(a, b) {
//   console.log(a + b);
// }

// function sum(x, y) {
//   s = x + y;
//   return s;
// }
// let val = sum(3, 4);
// console.log(val);
// function sum(x, y) {
//   z = x + y;
//   return z;
// }
// let val = sum(2, 8);
// console.log(val);
//sum function

// function sum(a, b) {
//   return a + b;
// }
// //multiplication function\
// function multiplication(x, y) {
//   return x * y;
// }
// const x = 5;
// // const arrowSum = (a, b) => {
// //   console.log(a + b);
// // };

// let multiply = (a, b) => {
//   console.log(a * b);
// };
// multiply = 5;

// const printHello = () => {
//   console.log("hello");
// };

function countVowels(str) {
  let count = 0;

  //Apna college
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}
