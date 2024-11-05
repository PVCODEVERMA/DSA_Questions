// Write a code that takes two tuples as input and returns a new tuple containing elements that are common to both input tuples.

//Given:-let tuple1 = [1, 2, 3, 4, 5];
//Given:-let tuple2 = [4, 5, 6, 7, 8];

//output:- [4,5]

function findCommonElements(tuple1,tuple2){

    let set1 = new Set(tuple1);
    let set2 = new Set(tuple2);

    let commonElements = [...set1].filter(item => set2.has(item));

    return commonElements;

}

let tuple1 = [1, 2, 3, 4, 5];
let tuple2 = [4, 5, 6, 7, 8];

let result = findCommonElements(tuple1,tuple2);
console.log(result);
