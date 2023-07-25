"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cachorro = void 0;
const animal_1 = require("./animal");
class Cachorro extends animal_1.Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
    latir() {
        console.log('O cachorro latiu!');
    }
    morder() {
        console.log('O cachorro mordeu!');
    }
}
exports.Cachorro = Cachorro;
