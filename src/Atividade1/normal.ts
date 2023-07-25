import {Ingresso} from '../Atividade1/ingresso';

export class Normal extends Ingresso {
    assento: number;

    constructor(valor: number, assento: number) {
        super(valor);
        this.assento = assento;
    }

    imprimeValor(): void {
        console.log(`Valor do ingresso: R$${this.valor.toFixed(2)}`);
    }
}