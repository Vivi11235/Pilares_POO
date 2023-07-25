//2. Crie a classe Imovel, que possui um endereço e um preço.

export abstract class Imovel {
    endereco: string;
    preco: number;

    constructor(endereco: string, preco: number) {
        this.endereco = endereco;
        this.preco = preco;
    }

    imprimirValor(): void {}
}