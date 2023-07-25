/*3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/


export class Animal {
    private _nome: string;
    private _idade: number;

    constructor(nome: string, idade: number){
        this._nome = nome;
        this._idade = idade;
    }

    public caminhar(passos: number) {
        console.log(`O animal caminhou ${passos} passos!`);
    }

    public morder(): void{
        console.log('O animal mordeu!');
    }

    get getNome(): string {
        return this._nome;
    }

    get getIdade(): number {
        return this._idade;
    }
}