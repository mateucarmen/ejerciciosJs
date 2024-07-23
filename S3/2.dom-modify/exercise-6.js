const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const ul = document.createElement("ul");
const body = document.querySelector("body");

apps.forEach(app => {
    const li = document.createElement("li");
    li.innerHTML = app;
    ul.appendChild(li);
});

body.appendChild(ul);