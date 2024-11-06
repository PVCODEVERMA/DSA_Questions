// Write a code that takes a tuple and an element as input. The function should return the count of occurrence of the given element in the tuple.
//myArray = [1,2,3,2,4,2,5];
//element user input count 



const prompt = require("prompt-sync")({sigint:true});

function countElement(arr,element){
    return arr.filter(item => item === element).length;
}

let myArray = [1,2,3,2,4,2,5];
let element = parseInt(prompt("Enter the element to count:"));

let result = countElement(myArray,element);
console.log(`The element ${element} occurs ${result} time(s)in the array.`);