// Write a code that generates the squares of numbers from 1 to n using a generator.



function* generateSquares(n) {
    for (let i = 1; i <= n; i++) {
        yield i * i; //1,4 ,9, 16
    }
}

// Example usage:
const n = 10;  // You can change this value to any number you want
const squares = generateSquares(n);

// To print the squares
for (let square of squares) {
    console.log(square);
}
