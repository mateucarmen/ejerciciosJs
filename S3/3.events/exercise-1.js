const btn = document.createElement("button");
btn.setAttribute("id", "btnToClick");
const body = document.querySelector("body");

btn.addEventListener("click", () => {
    console.log(btn.getAttribute("id"));
})

body.appendChild(btn);
