import {Animal} from './animal';

export class Gato extends Animal {
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public miar(): void {
        console.log('O gato miou!');
    }

    public morder(): void{
        console.log('O gato mordeu!');
    }
}