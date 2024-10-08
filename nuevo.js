let nombre = "Pimienta";
let edad = 10;
let precio = 99.90; 
let series = ["The Office", "Breaking Bad", "Bojack Horseman"];
let peliculas = [
    {
        nombre: "Inception",
        añoEstreno: 2010,
        protagonistas: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
        nombre: "Matrix",
        añoEstreno: 1999,
        protagonistas: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        nombre: "Interstellar",
        añoEstreno: 2014,
        protagonistas: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
];

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Precio: $" + precio.toFixed(2));
console.log("Series favoritas:", series.join(", "));

console.log("Películas:");