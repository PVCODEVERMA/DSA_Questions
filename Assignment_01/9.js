// Write a code to count the number of words in a string.

function countWorld(str){
    const word = str.trim().split(/\s+/);

    return word[0] === "" ? 0 : word.length;
}


let inputString = "Hello, how are you doing today?    ";
let wordCount = countWorld(inputString);
console.log(`The number of words is : ${wordCount}`);
