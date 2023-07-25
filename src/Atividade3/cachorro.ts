import {Animal} from './animal';

export class Cachorro extends Animal {
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public latir(): void {
        console.log('O cachorro latiu!');
    }

    public morder(): void{
        console.log('O cachorro mordeu!');
    }
}