const prompt = require('prompt-sync')();

// Prompt the user for a number
const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(Number(num) + 4);