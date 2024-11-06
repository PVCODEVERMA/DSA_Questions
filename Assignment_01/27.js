// Develop a code that takes a tuple of integers as input . The function should return the maximum and minimum values from the tuple using tuple unpacking.

// myArray = [10,3,25,1,99,40];
//output:- Minimum Value: 1
//output:- maximum value: 99

function findMinMax(arr){
    let minVal = Math.min(...arr);
    let maxVal = Math.max(...arr);

    return {minVal,maxVal};
}

let myArray = [10,3,25,1,99,40];

let { minVal,maxVal } = findMinMax(myArray);

console.log("Minimum Value:", minVal);
console.log("maximum value:",maxVal);
