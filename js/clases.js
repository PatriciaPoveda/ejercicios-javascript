"use strict";

//Clases

class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    //Getter
    get area() {
        return this.calcArea();
    }
    // Método
    calcArea() {
        return this.alto * this.ancho;
    }
}

const rectangulo = new Rectangulo(7, 10);

console.log(rectangulo.area);