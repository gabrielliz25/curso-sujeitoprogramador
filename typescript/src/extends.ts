interface Jogo {
    id: string,
    nome: string,
    descricao: string,
}

// interface Mod {
//     conteudoNovo: string
// }

// interface Mod extends Jogo {
//     id: string,
//     nome: string,
//     descricao: string,
//     conteudoNovo: string
// }

interface Mod extends Jogo {
    jogoOriginal: Jogo,
    conteudoNovo: string
}

const jogo1: Jogo = {
    id: "123",
    nome: "Minecraft",
    descricao: "Jogo para se divertir bastante"
}

// const jogo2: Mod = {
//     id: "123",
//     nome: "Minecraft Avaritia",
//     descricao: "Jogo para se divertir bastante",
//     conteudoNovo: "Novas armas e ferramentas"
// }

const jogo2: Mod = {
    id: "123",
    nome: "Minecraft Avaritia",
    descricao: "jogo para se divertir",
    jogoOriginal: jogo1,
    conteudoNovo: "Novas armas e ferramentas"
}

console.log(jogo1)
console.log(jogo2)
