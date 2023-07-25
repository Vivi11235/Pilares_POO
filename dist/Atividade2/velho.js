"use strict";
/*b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Velho = void 0;
const imovel_1 = require("./imovel");
class Velho extends imovel_1.Imovel {
    constructor(endereco, preco, desconto) {
        super(endereco, preco);
        this._desconto = desconto;
    }
    imprimeValor() {
        const valorFinal = this.preco - this._desconto;
        console.log(`O valor do imóvel é R$${valorFinal.toFixed(2)}`);
    }
    get desconto() {
        return this._desconto;
    }
}
exports.Velho = Velho;
