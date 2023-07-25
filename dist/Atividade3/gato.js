"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
const animal_1 = require("./animal");
class Gato extends animal_1.Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
    miar() {
        console.log('O gato miou!');
    }
    morder() {
        console.log('O gato mordeu!');
    }
}
exports.Gato = Gato;
