"use strict";

class Perro extends Animal {
    hablar() {
        super.hablar()
        console.log(this.nombre + ' ladra.');
    };

};
const p = new Perro('Mitzie');
p.hablar();