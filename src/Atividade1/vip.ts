/*b. crie uma classe VIP, que herda Ingresso e possui um valor
adicional. Altere o método imprimeValor para mostrar o valor
do ingresso somado com o adicional.*/

import {Ingresso} from '../Atividade1/ingresso';

export class Vip extends Ingresso {
    assento: number;
    adicional: number;

    constructor(valor: number, assento: number, adicional: number) {
        super(valor);
        this.assento = assento;
        this.adicional = adicional;
    }

    imprimeValor(): void {
        const valorTotal = this.valor + this.adicional;
        console.log(`Valor do ingresso: R$${valorTotal.toFixed(2)}`);
    }
}