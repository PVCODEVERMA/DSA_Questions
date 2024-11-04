//  Write a code to perform basic string compression using the counts of repeated characters.

function compressString(str){
    let compressed = "";
    let count = 1;

    for(let i=0; i<str.length; i++){

        if(str[i] === str[i + 1]){
            count++;
        }else{
            //Append the character and its count to the compressed string
            compressed += str[i] + (count >1 ? count : '');
            count = 1;
        }
    }
    // Return the compressed string only if it's shorter, else return the original string
    return compressed.length < str.length ? compressed : str;
}

let inputString = 'aabbccccddd'; //output-2a2b4c3d

let result = compressString(inputString);

console.log(result);


