//Write a code to check if two given  Strings are anagrams of each other.

function areAnagrams(str1,str2){
    const cleanStr  = (str)=>str.toLowerCase().replace(/[^a-z0-9]/g, '').split('').sort().join('');
    // console.log();

    return cleanStr(str1) === cleanStr(str2);

}




let string1  = "Listen";
let string2  =  "Silent";


if (areAnagrams(string1,string2)) {
    console.log("The strings are anagrams.");
}else{
    console.log("The strings are not anagrams.")
}