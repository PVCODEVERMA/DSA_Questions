//Write a code to count the number of vowels in a  string


function countVowels(str){
    const vowels = str.toLowerCase().match(/[aeiou]/g);

    return vowels ? vowels.length : 0;

}


let inputString = 'eeiouF';
let vowelCount = countVowels(inputString);
console.log(vowelCount);
