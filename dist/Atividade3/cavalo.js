"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cavalo = void 0;
const animal_1 = require("./animal");
class Cavalo extends animal_1.Animal {
    constructor(nome, idade) {
        super(nome, idade);
    }
    relinchar() {
        console.log('O cavalo relinchou!');
    }
    coicear() {
        console.log('O cavalo coiceou!');
    }
    morder() {
        console.log('O cavalo mordeu!');
    }
}
exports.Cavalo = Cavalo;
