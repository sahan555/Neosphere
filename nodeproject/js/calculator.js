const multiply = (a, b) => {
  return a * b;
};
const divide = (a, b) => {
  return a / b;
};
const add = (a,b) => a+b;

const sub = (a,b) => a-b;
const bmi = (w,h) => {
    let bmiValue;
    bmiValue = w/h**2;
    if(bmiValue <= 18.5){
        return `${bmiValue} underweight`
    }
    else{
        return `${bmiValue} healthy`
    }
}

function ReserveStr(str) {
  let aaString = "";
  for (i = str.length - 1; i >= 0; i--) {
    aaString += str[i];
  }
  return aaString;
}

module.exports = { multiply, divide, ReserveStr,add,sub,bmi};
