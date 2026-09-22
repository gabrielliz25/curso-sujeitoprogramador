// Classe Abstrata -> define o que uma classe filha deve ter, mas não pode ser usada diretamente para criar objetos.

abstract class Nome {
    abstract NomeCompleto(nome: string, sobrenome: string): string
}

class Pessoa extends Nome {
    NomeCompleto(nome: string, sobrenome: string) {
        return `${nome} ${sobrenome}`
    }
}

const p1 = new Pessoa()
console.log(p1.NomeCompleto("Gabriel", "Liz"))
