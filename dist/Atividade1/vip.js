"use strict";
/*b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vip = void 0;
const ingresso_1 = require("../Atividade1/ingresso");
class Vip extends ingresso_1.Ingresso {
    constructor(valor, assento, adicional) {
        super(valor);
        this.assento = assento;
        this.adicional = adicional;
    }
    imprimeValor() {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do ingresso: R$${valorTotal.toFixed(2)}`);
    }
}
exports.Vip = Vip;
