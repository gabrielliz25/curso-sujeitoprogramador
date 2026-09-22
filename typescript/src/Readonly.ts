interface Produto {
    readonly id: string,
    nome: string,
    descricao: string
}

const p1: Produto = {
    id: "1",
    nome: "Mesa",
    descricao: "objeto muito bonito"
}

// p1.id = "123" -> Erro 

console.log(p1)