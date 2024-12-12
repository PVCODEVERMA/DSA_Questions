// Write a code that generates palindromic numbers up to n using a generator.


function* generatePalindromes(n){
    for(i = 1; i <= n; i++){
        if(isPalindromes(i)) {
            yield i;
        }
    }

    function isPalindromes(num){
        const str = num.toString();
        return str === str.split().reverse().join('');
    }
}

const  n = 200;
const palindromes = generatePalindromes(n);

for(let pld of palindromes){
    console.log(pld);
    
}

