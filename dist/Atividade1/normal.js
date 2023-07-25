"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = void 0;
const ingresso_1 = require("../Atividade1/ingresso");
class Normal extends ingresso_1.Ingresso {
    constructor(valor, assento) {
        super(valor);
        this.assento = assento;
    }
    imprimeValor() {
        console.log(`Valor do ingresso: R$${this.valor.toFixed(2)}`);
    }
}
exports.Normal = Normal;
