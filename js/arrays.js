"use strict";

//Declaracion de un array
const array1 = [];
const array2 = [1, 2];
const array3 = ["Hola", "Adios"];
const array4 = ["Hola", 1];

//Conseguir elemento de un array
console.log(array4[0]);

//Añadir elemento a un array
array1[0] = "buenos días";
console.log(array1);

//Modificar elemento
console.log(`array4: ${array4}`);
array4[1] = "¿Cómo estas?";
console.log(`array4: ${array4}`);

//Propiedad length
console.log(array3.length);

//Función isArray
console.log(Array.isArray(array2));
