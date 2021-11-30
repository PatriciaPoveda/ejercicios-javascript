"use strict";

//While
//Mientras la condición condition sea verdadera, el código del cuerpo del bucle será ejecutado.

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

//do...while
//Esta sintaxis solo debe ser usada cuando quieres que el cuerpo del bucle sea ejecutado al menos una vez sin importar que la condición sea verdadera.

do {
    console.log(i);
    i++;
} while (i <= 6);

//For
const vegetales = ['Repollo', 'Nabo', 'Rábano', 'Zanahoria']

for (let i = 0; i < vegetales.length; i++) {
    const element = vegetales[i];
    console.log(element);
}

//For...of
const frutas = ["Manzana", "Banana"]
for (const fruta of frutas) {
    console.log(fruta);

}

//ForEach
const decadas = [1970, 1980, 1990, 2000, 2010]
decadas.forEach(decada => {
    console.log(decada);
});