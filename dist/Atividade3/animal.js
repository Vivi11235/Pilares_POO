"use strict";
/*3. Dado o seguinte diagrama:

Identifique os atributos e comportamentos que são comuns entre os
3 animais e encapsule-os na superclasse Animal. Crie pelo menos 1
comportamento diferente para cada animal.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    caminhar(passos) {
        console.log(`O animal caminhou ${passos} passos!`);
    }
    morder() {
        console.log('O animal mordeu!');
    }
    get getNome() {
        return this._nome;
    }
    get getIdade() {
        return this._idade;
    }
}
exports.Animal = Animal;
