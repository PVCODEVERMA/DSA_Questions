//  Create a code  that takes a tuple and two integers as input. The function should return a new tuple containing elements from the original tuple within the  specified range of indices.


// npm install prompt-sync
const prompt = require("prompt-sync")({ sigint: true });


function sliceArray(arr,startIdx,endIndx){
    return arr.slice(startIdx,endIndx);
}


let myArray = [10,20,30,40,50,60,70];
let start = parseInt(prompt("Enter start index: "));
let end = parseInt(prompt("Enter end index:"));

let result = sliceArray(myArray,start,end);
console.log("Sliced array:",result);