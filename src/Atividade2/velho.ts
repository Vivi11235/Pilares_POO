/*b. crie uma classe Velho, que herda Imovel e possui um desconto
no preço. Crie métodos de acesso e impressão para este
desconto.*/

import {Imovel} from './imovel';

export class Velho extends Imovel {
    private _desconto: number;

    constructor(endereco: string, preco: number, desconto: number) {
        super(endereco, preco);
        this._desconto = desconto;
    }

    imprimeValor(): void {
        const valorFinal = this.preco - this._desconto;
        console.log(`O valor do imóvel é R$${valorFinal.toFixed(2)}`);
    }

    get desconto():number {
        return this._desconto;
    }
}