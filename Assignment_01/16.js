// Implement a code to find and remove duplicates from a list while preserving the original order of elements.
// given list = [1, 2, 2, 3, 4, 4, 4, 5, 6, 5];
//output - [1,2,3,4,5,6]

function revere_duplicates(arr){
        let seen = new Set(); //set to track unique elements
        let result = []; 

        for(let i=0; i<arr.length; i++){
            if(!seen.has(arr[i])){
                seen.add(arr[i]);
                result.push(arr[i]);
            }
        }

        return result;
}


let  list = [1, 2, 2, 3, 4, 4, 4, 5, 6, 5];
let uniqueList_result = revere_duplicates(list);
console.log(uniqueList_result);




