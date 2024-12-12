// Write a code that generates prime numbers up to n using a generator.

function* generatePrimes(n) {
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

// Example usage:
const n = 50;  // You can change this value to any number you want
const primes = generatePrimes(n);

// To print the prime numbers
for (let prime of primes) {
    console.log(prime);
}
