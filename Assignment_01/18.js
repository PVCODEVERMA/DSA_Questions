// Write a code to merge two sorted lists into a single sorted list.
//given:- let sortedList1 = [1, 3, 5, 7];
//given:- let sortedList2 = [2, 4, 6, 8];
//output:- [1,2,3,4,5,6,7,8]

function mergeSortedLists(list1,list2) {
  let mergedList = [];
  let i = 0, j = 0;

  //Loop through both lists while comparing elements
  while (i < list1.length && j < list2.length) {
    if (list1[i] < list2[j]) {
      mergedList.push(list1[i]);
      i++;
    } else {
      mergedList.push(list2[j]);
      j++;
    }
  }

  //Add any remaining elements from list1,if any

  while (i < list1.length) {
    mergedList.push(list1[i]);
    i++;
  }

  // Add any remaining elements from list2, if any

  while (j < list2.length) {
    mergedList.push(list2[j]);
    j++;
  }

  return mergedList;
}

let sortedList1 = [1, 3, 5, 7];
let sortedList2 = [2, 4, 6, 8];

let resultList = mergeSortedLists(sortedList1, sortedList2);

console.log(resultList);
