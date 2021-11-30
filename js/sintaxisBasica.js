"use strict";

//Variables
let mes = "enero";
mes = "agosto";

var dia = "lunes";
dia = "martes";

//Constantes
const año = 2021;

var HORA_COMIDA = 2;

//Selector de etiqueta
const h1 = document.querySelector("h1");
const h2 = document.querySelector("#selectorId");
const h3 = document.querySelector(".selectorClase");

const h4 = document.getElementById("tipoId");


//Modificar contenido de la etiqueta html
h1.innerHTML = "Toma el elemento por su etiqueta";
h2.innerHTML = "Toma el elemento por su id";
h3.innerHTML = "Toma el elemento por su clase";
h4.innerHTML = "Toma el elemento del html con getElementById";

//Añadir y quitar clases
const parrafo = document.querySelector(".classList");

parrafo.classList.add("hidden");
parrafo.classList.remove("hidden");

//Función para saber de que tipo es una variable
console.log(typeof (mes));

//Operaciones
const suma = 2 + 2;
const resta = 2 - 2;
const multiplicacion = 2 * 2;
const division = 2 / 2;
const resto = 2 % 2;

//Concatenado e interpolacion de cadenas
console.log("Mi nombre es: " + "Patricia");
console.log(`En ${mes} hace mucho calor`);

//Longitud de un String

console.log(mes.length);



