// Implement a code to find the second largest number in a given list of integers.

function findSecondLargest(arr){
    if (arr.length < 2){
        return null; 
    }
    let largest = -Infinity; //Initialize largest as the smallest possible value
    let secondLargest = -Infinity; //Initialize second largest similarly

    for (let i = 0; i<arr.length; i++){
        if (arr[i] > largest ){
            secondLargest = largest; //update second largest to the old largest
            largest = arr[i]; //update largest to the current element
        } else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]; //update second largest if it's greater the the current second largest
        }
    }

    return secondLargest == -Infinity ? null : secondLargest;

}



let Number = [1,7,3,5,3,3]
let result = findSecondLargest(Number);

console.log(result);
