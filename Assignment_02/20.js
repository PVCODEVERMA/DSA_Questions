
function productOfPositives(numbers) {
    return numbers
        .filter(num => num > 0) // Filter only positive numbers
        .reduce((product, num) => product * num, 1); // Calculate the product
}

// Example usage
const list = [1, -3, 5, 7, -2, 0];
const result = productOfPositives(list);
console.log("Product of positive numbers:", result);
