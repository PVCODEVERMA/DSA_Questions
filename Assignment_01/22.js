// Create a code prompts the user to enter two sets of integers separated by commas. Then print the intersection of these two sets.
// Input1:- 1: 1, 2, 3, 4, 5
// Input2:- 2: 4, 5, 6, 7, 8
// Output: The intersection of the two sets is: [4, 5]


const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getIntersection(set1, set2) {
  // Convert both sets to arrays and then to Sets to remove duplicates
  let array1 = set1.split(',').map(Number);
  let array2 = set2.split(',').map(Number);
  
  let uniqueSet1 = new Set(array1);
  let uniqueSet2 = new Set(array2);

  // Find the intersection of both sets
  let intersection = [...uniqueSet1].filter(item => uniqueSet2.has(item));

  return intersection;
}

// Prompt the user for the first set of integers
rl.question('Enter the first set of integers, separated by commas: ', (input1) => {
  // Prompt the user for the second set of integers
  rl.question('Enter the second set of integers, separated by commas: ', (input2) => {
    
    // Find and display the intersection
    let result = getIntersection(input1, input2);
    console.log("The intersection of the two sets is:", result);

    // Close the readline interface
    rl.close();
  });
});
