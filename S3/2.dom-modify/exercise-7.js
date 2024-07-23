const removeMe = document.querySelectorAll(".fn-remove-me");
const body = document.querySelector("body");


removeMe.forEach(p => {
    body.removeChild(p);
});

