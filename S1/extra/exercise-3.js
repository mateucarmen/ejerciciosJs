const movies = [
    { name: "Your Name", durationInMinutes: 130 },
    { name: "Pesadilla antes de navidad", durationInMinutes: 225 },
    { name: "Origen", durationInMinutes: 165 },
    { name: "El señor de los anillos", durationInMinutes: 967 },
    { name: "Solo en casa", durationInMinutes: 214 },
    { name: "El jardin de las palabras", durationInMinutes: 40 }
];

const shortMovies = movies.filter((movie) => {
    return movie.durationInMinutes < 100
});

console.log(shortMovies);

const mediumMovies = movies.filter((movie) => {
    return movie.durationInMinutes >= 100 && movie.durationInMinutes < 200
});

console.log(mediumMovies);

const longMovies = movies.filter((movie) => {
    return movie.durationInMinutes > 200
});

console.log(longMovies);

