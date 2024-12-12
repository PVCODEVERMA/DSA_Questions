// Write a code that doubles the values of odd numbers from a given list.
function doubleOddNumbers(numbers) {
    return numbers.map(num => (num % 2 !== 0 ? num * 2 : num));
}

// Example usage
const numbers = [1, 2, 3, 4, 5];
const result = doubleOddNumbers(numbers);
console.log(result); // Output: [2, 2, 6, 4, 10]
