// Write a code that uses a lambda function to check whether a given number is even or odd.

const isEvenOrOdd=(num)=>
    num % 2 === 0 ? 'Even' : 'odd';

let number = 7;

let result = isEvenOrOdd(number);

console.log(result);
