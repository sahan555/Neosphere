const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Enter the weight:", function (w) {
  rl.question("Enter your height(in meters)", function (h) {
    const bmis = w / h ** 2;
    console.log(`Bmi ${bmis}`);
    rl.close();
  });
});