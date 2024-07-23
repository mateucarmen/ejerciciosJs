
const body = document.querySelector("body");
const secondDiv = document.querySelectorAll("div")[1];
const p = document.createElement("p");
p.innerHTML = "Voy en medio!";

body.insertBefore(p, secondDiv);
