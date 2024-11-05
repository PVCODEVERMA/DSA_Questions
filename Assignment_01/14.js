// Create a code to count the occurrences of each element in a list and return a dictionary with elements as keys and their counts as values.


function countOccurrences(arr){
    let count = {};

    //Loop through each element in the array
    for(let i = 0; i<arr.length; i++){
        let element = arr[i];

        if(count[element]){
            count[element]++;
        }else{
            count[element] = 1;
        }

        // count[element] = count[element] ? count[element] +1 :1;
    }
    return count;

}

let list = [1,2,2,3,4,4,4,5,5];// 1:1,2:2,3:1,4:3,5:2 = 12132
let result = countOccurrences(list);

console.log(result);// output: { '1': 1, '2': 2, '3': 1, '4': 3, '5': 2 }
