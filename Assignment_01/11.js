//Write a code to concatenate MultipleString string without using the + operator.

function concatenateMultipleString(...strings){
    return ''.concat(...strings);
}


let string1 = "Hello";
let string2 = "Pankaj";
let string3 = "Kumar";
let string4 = "ji";


let result = concatenateMultipleString(string1," ", string2," ", string3," ", string4);
console.log(result);
