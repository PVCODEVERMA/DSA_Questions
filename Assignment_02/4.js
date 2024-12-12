// What are *args and **kwargs.?

// function myFunction(...args){
//     args.forEach(arg => console.log(arg)
//     );
// }

// myFunction_Number(1,2,3,4);

function myFunction(first, second, ...rest) {
    console.log(first, second);  // Logs the first two arguments
    console.log(rest);           // Logs the rest of the arguments as an array
}

myFunction('a', 'b', 'c', 'd', 'e');  
