//Implement a code to find the intersection of two given lists.
// given:- let list1 = [1,2,3,4,5];
// given:- let list2 = [4,5,6,7,8];

//intersection:- { list1 ∩ list 2 }
//output:- [4,5];

function findIntersection(list1,list2){
    let set1 = new Set(list1);
    let intersection = [];

    for(let item of list2){
        if(set1.has(item)){
            intersection.push(item);
        }
    }
    return intersection;
}

let list1 = [1,2,3,4,5];
let list2 = [4,5,6,7,8];

let result = findIntersection(list1,list2);
console.log(`intersection value: ${result}`);
