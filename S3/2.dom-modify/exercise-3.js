
const div = document.createElement("div");
const body = document.querySelector("body");


function addP(numberOfP) {
    for (let i = 0; i < numberOfP; i++) {
        const p = document.createElement("p");
        div.appendChild(p); 
    }
}

addP(6);

body.appendChild(div);