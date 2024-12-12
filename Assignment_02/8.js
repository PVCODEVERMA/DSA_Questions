// Write a code that generates even numbers from 2 to n using a generator.

function* generateEvens(n){
    for (i = 2; i <= n; i += 2 ){  //i += 2 or i = i + 2
        yield i;
    }
}

const n = 20; 
const evens = generateEvens(n);

for (let even of evens){
    console.log(even);
    
}