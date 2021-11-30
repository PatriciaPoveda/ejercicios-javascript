"use strict";

//Promesas
//una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:
//La promesa se cumple (promesa resuelta)
//La promesa no se cumple (promesa se rechaza)
//La promesa se queda en un estado incierto indefinidamente (promesa pendiente)


fetch("https://dog.ceo/api/breeds/image/random")
    .then(Response => Response.json())
    .then(data => {
        console.log(data.message);
    })