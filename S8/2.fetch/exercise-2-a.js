
const input = document.querySelector("input");
const button = document.querySelector("button");

const baseUrl = 'https://api.nationalize.io?name=';

button.addEventListener("click", () => {
    fetch(baseUrl + input.value.trim()) 
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
});







   

