// Write a code that calculates the product of positive numbers from a given list
function productOfPositiveNumbers(numbers) {
    // Initialize the product to 1
    let product = 1;

    // Flag to check if there are any positive numbers
    let hasPositive = false;

    // Loop through the numbers
    for (let num of numbers) {
        if (num > 0) {
            product *= num;
            hasPositive = true;
        }
    }

    // Return the product if there are positive numbers, else return 0
    return hasPositive ? product : 0;
}

// Example usage
const numbers = [3, -1, 4, 0, -5, 2];
console.log(productOfPositiveNumbers(numbers)); // Output: 24 (3 * 4 * 2)
