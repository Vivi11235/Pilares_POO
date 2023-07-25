import {Animal} from './animal';

export class Cavalo extends Animal {
    constructor(nome: string, idade: number){
        super(nome, idade);
    }

    public relinchar(): void {
        console.log('O cavalo relinchou!');
    }

    public coicear(): void {
        console.log('O cavalo coiceou!');
    }

    public morder(): void{
        console.log('O cavalo mordeu!');
    }
}