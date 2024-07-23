const insertHereDivs = document.querySelectorAll(".fn-insert-here");

insertHereDivs.forEach(div => {
    const p = document.createElement("p");
    p.innerHTML = "Voy dentro!";
    div.appendChild(p)
});