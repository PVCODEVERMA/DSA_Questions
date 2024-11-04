//Write a code to  check if a given String  is a palindrome or not

function  isPalindrome(str){
    const  cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;

}


let inputString  =  'A man, a plan, a canal, panama!';
let result =  isPalindrome(inputString);

if (result) {
    console.log("The String is a palindrome.");
}else{
    console.log("The String is not a palindrome.");
}
