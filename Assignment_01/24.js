// Develop a code that prompts the user to input two sets of strings. Then print the elements that are present in the fist set but not in the second set.


//npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });


function getDifference(set1,set2){
    let arr1 = set1.split(',').map(item => item.trim());
    let arr2 = set2.split(',').map(item => item.trim());

    let difference = arr1.filter(item => !arr2.includes(item));
    return difference;

}

let input1 = prompt("Enter the first set of strings:");
let input2 = prompt("Enter the second set of strings: ");

let result = getDifference(input1,input2);
console.log(result);