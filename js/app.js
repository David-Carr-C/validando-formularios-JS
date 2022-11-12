import {valida} from "./validaciones.js";
//const React = require("react"); // solo funciona cuando "node ./app.js"

const inputs = document.querySelectorAll("input"); // se obtienen todos los inputs

inputs.forEach((input) => { // por cada input se le agrega un addEventListener
    input.addEventListener("blur", (input) => { // cada vez que se salgan del input..
        console.log("Hello"); // adding console log to debug
        valida(input.target); // se ira a la funcion
    });
});
