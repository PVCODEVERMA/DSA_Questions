// Write a code to concatenate two tuples. the function should take two tuples as input and return a new tuple containing elements from both input tuples.

// concatenate two tuples
//Add two tuple

// tuple1 = [1,2,3];
// tuple2 = [4,5,6];
//output:- [1,2,3,4,5,6]

function concatenatedTuple(tuple1, tuple2) {
  return [...tuple1, ...tuple2];
}

const tuple1 = [1, 2, 3];
const tuple2 = [4, 5, 6];

const result = concatenatedTuple(tuple1, tuple2);

console.log("Concatenate Tuple:", result);
