"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pessoa {
    nome;
    sobrenome;
    idade;
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    get getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
    set setNovaIdade(idade) {
        this.idade = idade > this.idade ? idade : this.idade;
    }
}
const p1 = new Pessoa("Gabriel", "Liz", 19);
console.log(p1.getNomeCompleto);
p1.setNovaIdade = 25;
p1.setNovaIdade = 15;
console.log(p1);
//# sourceMappingURL=Classes-get-set.js.map