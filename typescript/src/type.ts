type Moedas = "BRL" | "EUR" | "USD" | "BTC"

function checarMoeda(moeda: Moedas): void {
    console.log(`Comprando com a moeda: ${moeda}`)
}

checarMoeda("BRL")
// checarMoeda("AAA") -> ERRO

// ## INTERSSECTIONS

interface Pessoa {
    nome: string,
    idade: number,
}

interface Funcionario {
    salario: number,
    cargo: string,
}

// Une dois tipos em um mesmo
type PessoaFisica = Pessoa & Funcionario

const pf1: PessoaFisica = {
    nome: "Gabriel",
    idade: 19,
    salario: 2500,
    cargo: "StoryMaker"
}
console.log(pf1)



