
const userAnwsers = [];



function confirmExample(description){
    let confirmValue = confirm(description);
    return confirmValue;
};

function promptExample(description){
    let propmt = prompt(description);
    return propmt;
}

function father(description, cb){
    return cb(description)
};

let text1 = father("¿Estoy haciendo bien el ejercicio?", confirmExample);
let text2 = father("¿Cómo te llamas?", promptExample);
let text3 = father("¿Deseas continuar en esta página?", confirmExample);
let text4 = father("Introduce tu edad", promptExample);

userAnwsers.push(text1, text2, text3, text4);
console.log(userAnwsers);
