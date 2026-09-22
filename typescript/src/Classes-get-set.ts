class Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;

    constructor(nome: string, sobrenome: string, idade: number) {
        this.nome = nome
        this.sobrenome = sobrenome
        this.idade = idade
    }

    get getNomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set setNovaIdade(idade: number) {
        this.idade = idade > this.idade ? idade : this.idade;
    }
}

const p1 = new Pessoa("Gabriel", "Liz", 19)
console.log(p1.getNomeCompleto)
p1.setNovaIdade = 25
p1.setNovaIdade = 15

console.log(p1)