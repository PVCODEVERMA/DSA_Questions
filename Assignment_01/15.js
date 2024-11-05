// write a code to reverse a list in-place without using any built-in reverse functions.  given list = [1,2,3,4,5] 
//output - [5,4,3,2,1]

function List_ReverseOrder(arr){
    let start = 0;
    let end = arr.length -1;

    while(start < end){
        // swap element at position start and end
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        
        start++;
        end--;
    }
}


let list = [1,2,3,4,5];

let result = List_ReverseOrder(list);
console.log(result);
