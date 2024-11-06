//  Write a code that takes a list of words as input and returns a dictionary where the keys are unique words and the values are the frequencies of those words in the input list.

const prompt = require("prompt-sync")({sigint:true});


function worldFrequency(worldList){
    let frequencyDict = {};

    worldList.forEach(item => {
        if(frequencyDict[item]){
            frequencyDict[item] += 1;
        } else {
            frequencyDict[item] = 1;
        }
    });
    return frequencyDict;

}


let inputWorld = prompt("Enter a list of world (common separated):");


let worldList = inputWorld.split(",").map(item => item.trim().toLowerCase());


let result = worldFrequency(worldList);
console.log("World Frequencies:",result);