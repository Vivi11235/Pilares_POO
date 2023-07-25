import {Normal} from './Atividade1/normal';
import {Vip} from './Atividade1/vip';
import {Camarote} from './Atividade1/camarote';
import {Novo} from './Atividade2/novo';
import {Velho} from './Atividade2/velho';
import {Cachorro} from './Atividade3/cachorro';
import {Gato} from './Atividade3/gato';
import {Cavalo} from './Atividade3/cavalo';

//Atividade 1

const ingressoNormal = new Normal(100, 2);
ingressoNormal.imprimeValor();

const ingressoVip = new Vip(100, 3, 50);
ingressoVip.imprimeValor();

const ingressoCamarote = new Camarote(100, 4, 100);
ingressoCamarote.imprimeValor();

//Atividade 2

const imovelNovo = new Novo('Rua 7 de Setembro', 500000, 100000);
imovelNovo.imprimeValor();

const adicionalNovo = imovelNovo.adicional;
console.log(adicionalNovo);

const imovelVelho = new Velho('Rua 20 de Setembro', 500000, 50000);
imovelVelho.imprimeValor();

const descontoVelho = imovelVelho.desconto;
console.log(descontoVelho);

//Atividade 3

const gato = new Gato('Félix', 20);
console.log(gato.getNome);
console.log(gato.getIdade);

gato.caminhar(20);
gato.miar();
gato.morder();

const cachorro = new Cachorro('Ônix', 15);
console.log(cachorro.getNome);
console.log(cachorro.getIdade);

cachorro.caminhar(30);
cachorro.latir();

const cavalo = new Cavalo('Spirit', 10);
console.log(cavalo.getNome);
console.log(cavalo.getIdade);

cavalo.caminhar(50);
cavalo.coicear();
cavalo.morder();
cavalo.relinchar();


