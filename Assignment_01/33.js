// Write a code to access a value in a nested dictionary . The function should take the dictionary and a list of keys as input and return the corresponding value . if any of the keys do not exist in the dictionary the function should return None.

// // Example nested dictionary
// let nestedDict = {
//     'a': {
//       'b': {
//         'c': 42,
//         'd': 100
//       },
//       'e': 50
//     },
//     'f': 75
//   };

//let keys = ['a', 'b', 'c'];
// Result: 42



function getNestedValue(dictionary,keyList){
    let currentValue = dictionary;

    for(let key of keyList){
        if(currentValue[key] !== undefined ){

            currentValue = currentValue[key];
        }else{
            return null;
        }
    }


    return currentValue;

}

let nestedDict = {
    'a': {
        'b': {
            'c': 42,
            'd': 100
        },
        'e': 50
    },
    'f': 75
};

//Example input keys
let keys = ['a','b','c'];

let result = getNestedValue(nestedDict,keys);

console.log("Result:",result);