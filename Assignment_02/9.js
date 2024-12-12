// Write a code that generates powers of two up to n using a generator.

function* generatePowersOfTwo(n){
    let power = 1;
    while(power <= n){
        yield power;
        // power = power * 2;
        power *= 2;
    }
}

const n = 100;
const powersOfTwo = generatePowersOfTwo(n);

for (let power of powersOfTwo){
    console.log(power);
    
}