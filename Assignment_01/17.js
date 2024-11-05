// Create a code to check if a given list is sorted(either in ascending or descending order) or not.
//given list1 = [1,2,3,4,5]
//given list2 = [5,4,3,2,1]
//given list3 = [3,1,4,2,5]

//output1:- true
//output2:- true
//output3:- false

function isSorted(arr) {
  let ascending = true;
  let descending = true;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      ascending = false;
    }
    if (arr[i] > arr[i - 1]) {
      descending = false;
    }
  }
  return ascending || descending;
}

let list1 = [1, 2, 3, 4, 5];
let list2 = [5, 4, 3, 2, 1];
let list3 = [3, 1, 4, 2, 5];

let result1 = isSorted(list1);
let result2 = isSorted(list2);
let result3 = isSorted(list3);

console.log(result1);
console.log(result2);
console.log(result3);
