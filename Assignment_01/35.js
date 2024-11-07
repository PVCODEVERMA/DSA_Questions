// Write a code that inverts a dictionary , swapping keys and values. Ensure that the inverted dictionary correctly handles case where multiple keys have the same value by storing the keys as a list in the inverted dictionary.


function invertDictionary(dict){
    let invertedDict  = {};

    for(let[key,value] of Object.entries(dict)){
        if(invertDictionary[value]){
            invertedDict[value].push(key);
        } else  {
            invertedDict[value] = [key];
        }
    }
    return invertedDict;

}
let dict =  {
    'apple': 1,
    'banana': 2,
    'cherry': 1,
    'data': 3,
    'elderberry': 2
};

let invertedDict = invertDictionary(dict);

console.log("Inverted Dictionary:",invertedDict);;
