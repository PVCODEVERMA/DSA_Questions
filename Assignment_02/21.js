// Write a code that calculates the sum of cubes of numbers from a given list

function sumOfCubes(numbers){
    return numbers
            .map(num => Map.pow(num,3))
            
}

const list = [1,2,3,4];
const result = sumOfCubes(list);
console.log("Sum of cubes:",result);
