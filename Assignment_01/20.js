// Create a code to find the union of two lists without duplicates.

//given:- let list1 = [1,2,3,4,5];
//given:- let list2 = [4,5,6,7,8];

//Mathematical Definition
// list1 and list 2 is list1 ∪ list2 = {1,2,3,4,5,6,7,8}.

//output:- [1,2,3,4,5,6,7,8];

function findUnion(list1,list2){
    // combine both lists and use set to remove duplicates
    let unionSet = new Set([...list1, ...list2]);

    //Convert the set back to an array
    return Array.from(unionSet);

}


let list1 = [1,2,3,4,5];
let list2 = [4,5,6,7,8];

let result = findUnion(list1,list2);

console.log(`The union list1 and list2 is list1 U list2: ${result}`);

