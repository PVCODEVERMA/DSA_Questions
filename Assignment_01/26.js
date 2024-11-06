// Write a code that prompts the user to input two sets of characters. Then print the union of these two sets.

const prompt = require("prompt-sync")({sigint:true});

function getUnion(set1, set2) {
    // Combine both sets and convert to a Set to remove duplicates
    let combinedSet = new Set([...set1, ...set2]);
    return combinedSet;
}

// Get user input
let input1 = prompt("Enter the first set of characters (without spaces):");
let input2 = prompt("Enter the second set of characters (without spaces):");

// Find the union
let result = getUnion(input1.split(''), input2.split(''));
console.log("Union of the two sets:", Array.from(result).join(''));
