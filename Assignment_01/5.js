//Write a code  find all occurrences of a given substring within another  string.

function findAllOccurrences(string, substring) {
  const indices = [];
  let index = string.indexOf(substring);

  while (index !== -1) {
    indices.push(index);
    index = string.indexOf(substring, index + 1);
  }

  return indices;
}

const string = "Hello world, hello again!";
const substring = "hello";
const occurrences = findAllOccurrences(string, substring);

console.log(occurrences); // Output: [0, 13]
