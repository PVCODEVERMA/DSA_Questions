//  Write a code revers all occurrence of a specific element from a list.

function removeAllOccurrences(arr,element){
    return arr.filter(item => item !== element); //filter()
}


let list = [1,2,3,4,3,5,3,6];
let elementToRemove = 3;

let result_UpdatedList = removeAllOccurrences(list,elementToRemove);
console.log(result_UpdatedList);
