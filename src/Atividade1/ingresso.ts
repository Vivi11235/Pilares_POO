/*1. Crie uma classe abstrata chamada Ingresso que possui um valor
em reais e um método imprimeValor()*/

export abstract class Ingresso {
    valor: number;

    constructor(valor: number) {
        this.valor = valor;
    }

    imprimeValor(): void {};
}