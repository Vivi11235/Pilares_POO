"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Normal = exports.Ingresso = void 0;
class Ingresso {
    constructor(valor) {
        this.valor = valor;
    }
}
exports.Ingresso = Ingresso;
class Normal extends Ingresso {
    imprimeValor() {
        console.log(`Valor do ingresso normal: R$ ${this.valor}`);
    }
}
exports.Normal = Normal;
/*abstract class Ingresso {
    protected valor: number;
  
    constructor(valor: number) {
      this.valor = valor;
    }
  
    abstract imprimeValor(): void;
  }
  
  class Normal extends Ingresso {
    imprimeValor(): void {
      console.log(`Valor do ingresso normal: R$ ${this.valor}`);
    }
  }
  
  class VIP extends Ingresso {
    private valorAdicional: number;
  
    constructor(valor: number, valorAdicional: number) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso VIP: R$ ${valorTotal}`);
    }
  }
  
  class Camarote extends Ingresso {
    private valorAdicional: number;
  
    constructor(valor: number, valorAdicional: number) {
      super(valor);
      this.valorAdicional = valorAdicional;
    }
  
    imprimeValor(): void {
      const valorTotal = this.valor + this.valorAdicional;
      console.log(`Valor do ingresso Camarote: R$ ${valorTotal}`);
    }
  }
  
  // Exemplo de uso das classes:
  const ingressoNormal = new Normal(50);
  ingressoNormal.imprimeValor();
  
  const ingressoVIP = new VIP(100, 20);
  ingressoVIP.imprimeValor();
  
  const ingressoCamarote = new Camarote(80, 30);
  ingressoCamarote.imprimeValor();*/ 
