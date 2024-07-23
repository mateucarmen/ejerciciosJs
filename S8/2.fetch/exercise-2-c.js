const input = document.querySelector("input");
const button = document.querySelector("button");
const body = document.querySelector("body");

const baseUrl = 'https://api.nationalize.io?name=';


button.addEventListener('click', () => {
    const name = input.value.trim();
    if (name) {
        const apiUrl = `${baseUrl}${name}`;

        fetch(apiUrl)
            .then((response) => response.json())
            .then(data => {
                const p = document.createElement('p');
                p.classList.add('result');
                let resultText = `El nombre ${data.name} tiene `;
                data.country.forEach((country, index) => {
                    resultText += `${Math.round(country.probability * 100)} porciento de ser de ${country.country_id}`;
                    if (index < data.country.length - 1) {
                        resultText += ' y ';
                    }
                });
                const deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'X';
                deleteButton.classList.add('delete-button');
                deleteButton.addEventListener('click', () => {
                    body.removeChild(p);
                });
                p.innerHTML = resultText + '';
                p.appendChild(deleteButton);
                body.appendChild(p);
            })
            .catch((error) => console.log(error));
    }});