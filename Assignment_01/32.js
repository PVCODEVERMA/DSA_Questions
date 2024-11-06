// Write a code that takes two dictionaries as input and merges then into a single dictionary . if there are common keys the values should be added together.

function mergeDictionaries(dict1,dict2){
    let mergedDict = { ...dict1};

    for( let key in dict2){
        if(mergedDict[key]){
            mergedDict[key] += dict2[key];
        }else{
            mergedDict[key] = dict2[key];
        }
    }

    return mergedDict;
}

let dict1 = {
    'apple': 3,
    'banana': 2,
    'orange': 5
};

let dict2 = {
    'banana': 4,
    'grape': 7,
    'orange': 1
};


let mergedDict = mergeDictionaries(dict1,dict2);

console.log("Merged Dictionary:",mergedDict);