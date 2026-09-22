"use strict";
// Classe Abstrata -> define o que uma classe filha deve ter, mas não pode ser usada diretamente para criar objetos.
Object.defineProperty(exports, "__esModule", { value: true });
class Nome {
}
class Pessoa extends Nome {
    NomeCompleto(nome, sobrenome) {
        return `${nome} ${sobrenome}`;
    }
}
const p1 = new Pessoa();
console.log(p1.NomeCompleto("Gabriel", "Liz"));
//# sourceMappingURL=Classes-Abstratas.js.map