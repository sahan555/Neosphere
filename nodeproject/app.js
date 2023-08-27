const calc = require("./js/calculator");

console.log(`Hello World`);

const multi = calc.multiply(8, 5);
const add = calc.add(50, 10);
const sub = calc.sub(50, 10);

const div = calc.divide(50, 10);
const bmi = calc.bmi(55, 1.5);
console.log(multi);
console.log(div);
console.log(`${add},${sub}`);
console.log(`The bmi calculator of ${bmi}`);

const reverse = calc.ReserveStr("Aaluuuuuu");
console.log(reverse);