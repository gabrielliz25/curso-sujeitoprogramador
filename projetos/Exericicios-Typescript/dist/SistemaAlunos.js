"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    nome;
    notas = [];
    constructor(nome) {
        this.nome = nome;
    }
    adicionarNota(nota) {
        if (nota < 0 || nota > 10) {
            console.log("Valor inválido");
        }
        this.notas.push(nota);
    }
    calcularMedia() {
        if (this.notas.length < 1)
            return 0;
        let soma = this.notas.reduce((valor, total) => {
            return total += valor;
        }, 0);
        let media = soma / this.notas.length;
        return media;
    }
    foiAprovado() {
        let media = this.calcularMedia();
        if (media >= 7) {
            console.log(`${this.nome} foi aprovado, com média: ${media}`);
        }
        else {
            console.log(`${this.nome} foi reprovado, com média: ${media}`);
        }
    }
}
const aluno1 = new Aluno("Gabriel");
aluno1.adicionarNota(5);
aluno1.adicionarNota(8);
aluno1.adicionarNota(9);
aluno1.adicionarNota(7.5);
aluno1.adicionarNota(6);
console.log("Media:", aluno1.calcularMedia());
aluno1.foiAprovado();
console.log(aluno1);
//# sourceMappingURL=SistemaAlunos.js.map