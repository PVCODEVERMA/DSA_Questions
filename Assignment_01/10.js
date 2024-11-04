//  Write a code to concatenate two string without using the + operator.

function concatenateString(str1,str2){
    return str1.concat(str2); //concatenates str2 to the end of str1
}

let string1 = "Hello, ";
let string2 = "World!";

let result = concatenateString(string1,string2);
console.log(result);

//Write a code to concatenate MultipleString string without using the + operator.