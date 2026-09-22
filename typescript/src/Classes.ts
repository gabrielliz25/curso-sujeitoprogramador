class Loja {
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome,
        this.categoria = categoria
    }
}

const loja1 = new Loja("Lanchonete", "Alimentos")

console.log(loja1)