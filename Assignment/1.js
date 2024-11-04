function reverseString(str){
    return str.split('').reverse().join('');
}


let originalString = "Hello, world!";

let  reverse_String = reverseString(originalString);

console.log(reverse_String);
