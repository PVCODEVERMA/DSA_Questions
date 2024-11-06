// Develop a code that prompts the user to input two sets of string . Then print the symmetric difference of these two sets.

const prompt = require("prompt-sync")({sigint:true});

function symmetricDifference(setA,setB){
    let diffA = [...setA].filter(x => !setB.has(x));
    let diffB = [...setB].filter(x => !setA.has(x));

    let symmetricDiff = [...diffA, ...diffB];
    return symmetricDiff;

}


let setAInput = prompt("Enter the first set of string:");
let setBInput = prompt("Enter the second set of string:");

//Convert input string to sets
let setA = new Set(setAInput.split(",").map(item => item.trim()));
let setB = new Set(setBInput.split(",").map(item => item.trim()));



let result = symmetricDifference(setA,setB);
console.log("Symmetric Difference:",result);
