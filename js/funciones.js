"use strict";

//funcion sin parametros
function suma1() {
    return console.log(5 + 2);
}

suma1();

//funcion con parametros
function suma2(a, b) {
    return console.log(a + b);
}

suma2(3, 2);

//Funciones anonimas
const suma3 = function (a, b) {
    return console.log(a + b);
}

suma3(1, 1);

//Función arrow

const suma4 = (a, b) => {
    return console.log(a + b);
}
suma4(4, 5);