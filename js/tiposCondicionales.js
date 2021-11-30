"use strict";

//If...else
const parImpar = 5;
if ((parImpar % 2) === 0) {
    console.log("El numero es par");
} else {
    console.log("El numero es impar");
}

//If...else if
const edades = 85;
if (edades < 18) {
    console.log("Eres un adolescente");
} else if (edades >= 18 && edades <= 79) {
    console.log("Eres un adulto");
} else {
    console.log("Eres un anciano");
}

//Operador condicional o ternario
const open = true;
const estado = open ? "Esta abierto" : "Esta cerrado";
console.log(estado);

//Switch
const today = "Domingo"
switch (today) {
    case "Lunes":
        console.log("Hay que trabajar");
        break;
    case "Martes":
        console.log("Hay que trabajar");
        break;

    case "Miercoles":
        console.log("Hay que trabajar");
        break;
    case "Jueves":
        console.log("Hay que trabajar");
        break;
    case "Viernes":
        console.log("Hay que trabajar");
        break;
    default:
        console.log("Es fin de semana");
        break;
}