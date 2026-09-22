"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ContaBancaria {
    saldo;
    nome;
    constructor(nome) {
        this.nome = nome;
        this.saldo = 0;
    }
    consultarSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo},00`);
    }
    depositar(valor) {
        if (valor <= 0) {
            throw new Error("Valor inválido, insira um valor positivo");
        }
        this.saldo += valor;
    }
    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error("Valor muito alto para sacar, tente um valor menor");
        }
        this.saldo -= valor;
    }
}
const conta1 = new ContaBancaria("Gabriel");
conta1.depositar(10);
// conta1.depositar(-5) -> ERRO
conta1.sacar(5);
conta1.sacar(200);
conta1.consultarSaldo();
//# sourceMappingURL=ContaBancaria.js.map