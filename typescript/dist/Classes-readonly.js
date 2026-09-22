"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    email;
    constructor(nome, email) {
        this.nome = nome,
            this.email = email;
    }
    showInfos() {
        // this.nome = "opa" ERRO: propriedade é readonly
        console.log(`${this.nome} - ${this.email}`);
    }
}
const p1 = new Pessoa("Gabriel", "gabriel@gmail.com");
// p1.nome = "teste" ERRO: propriedade é readonly
console.log(p1);
//# sourceMappingURL=Classes-readonly.js.map