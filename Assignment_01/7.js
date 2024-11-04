// Write a code to determine if a string has all unique characters.


function hasUniqueCharacters(str){
    const charSet = new Set(); //create a set yo store unique characters

    for (let i = 0; i < str.length; i++){
        if(charSet.has(str[i])) {
            return false; //If the character is already in the set , the string doesn't have all unique characters
        }
        charSet.add(str[i]); 
    }

    return true;  //If no duplicates were found all characters are unique

}

let inputString = "abcdefg";
let result = hasUniqueCharacters(inputString);

if(result){
    console.log("\nThe string has all unique characters \n\n");
}else{
    console.log("\nDoes not have all unique characters \n");
}
