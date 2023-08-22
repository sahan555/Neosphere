
console.log(`Hello World`);

const calc = require('./calculator');
const multi = calc.multiply(8,5);
const add = calc.add(50,10);
const sub = calc.sub(50,10);

const div = calc.divide(50,10);
const reverse = calc.ReserveStr('Aalu');
const bmi = calc.bmi(55,1.5);
console.log(reverse);
console.log(multi);
console.log(div);
console.log(`${add},${sub}`)
console.log(`The bmi calculator of ${bmi}`)