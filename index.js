const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

readline.question('Enter a number: ', num => {
  const result = isPrime(parseInt(num)) ? 'is a prime number.' : 'is not a prime number.';
  console.log(`${num} ${result}`);
  readline.close();
});
