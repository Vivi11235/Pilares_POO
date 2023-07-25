/*a. crie uma classe Novo, que herda Imovel e possui um adicional
no preço. Crie métodos de acesso e impressão deste valor
adicional.*/ 

import {Imovel} from './imovel';

export class Novo extends Imovel {
    private _adicional: number;

    constructor(endereco: string, preco: number, adicional: number) {
        super(endereco, preco);
        this._adicional = adicional;
    }

    imprimeValor(): void {
        const valorTotal = this.preco + this._adicional;
        console.log(`O valor do imóvel é R$${valorTotal.toFixed(2)}`);
    }

    get adicional():number {
        return this._adicional;
    }
}