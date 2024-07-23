const numersList = [];

function sum(a, b) {
    return a + b;
};

function substract(a, b){
    return a - b;
};

function father(a, b, cb){
    return cb(a, b);
};

let num1 = father(30, 15, sum);
let num2 = father(30, 15, substract);
let num3 = father(20, 10, sum);
let num4 = father(20, 10, substract);

numersList.push(num1, num2, num3, num4);

console.log(numersList);




