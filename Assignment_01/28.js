// Create a code that defines two sets of integers. Then print the union, intersection, and difference of these two sets. 

// Explanation:
// 1. Union:- combines both sets, removing duplicates.
// 2. Intersection:- gives elements present in both sets.
// 3. Difference:- gives elements present in the first set but not in the second set.

function getUnion(set1,set2){
    return new Set([...set1, set2]);
}
function getIntersection(set1,set2){
    return new Set([...set1, set2]);
}
function getDifference(set1,set2){
    return new Set([...set1, set2]);
}


let setA = new Set([1,2,3,4,5]);
let setB = new Set([4,5,6,7,8]);

// let result = Array.from(getUnion(setA,setB));
// console.log("Union:",result);


console.log("Union:",Array.from(getUnion(setA,setB)));
console.log("Intersection:",Array.from(getIntersection(setA,setB)));
console.log("Difference:",Array.from(getDifference(setA,setB)));