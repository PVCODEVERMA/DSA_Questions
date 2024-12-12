// Write a code that generates the squares of even numbers from a given list
function getEvenSquares(numbers){
    return numbers
    .filter(num => num % 2 === 0)
    .map(num => num ** 2);
}

const numbers = [1,2,3,4,5,6,7,8];
const evenSquares = getEvenSquares(numbers);
console.log("EvenSquares:",evenSquares);
