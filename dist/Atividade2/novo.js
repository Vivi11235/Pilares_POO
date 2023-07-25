"use strict";
/*a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Novo = void 0;
const imovel_1 = require("./imovel");
class Novo extends imovel_1.Imovel {
    constructor(endereco, preco, adicional) {
        super(endereco, preco);
        this._adicional = adicional;
    }
    imprimeValor() {
        const valorTotal = this.preco + this._adicional;
        console.log(`O valor do imóvel é R$${valorTotal.toFixed(2)}`);
    }
    get adicional() {
        return this._adicional;
    }
}
exports.Novo = Novo;
