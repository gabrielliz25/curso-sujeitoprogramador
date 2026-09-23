interface Produto<V> {
    nome: string,
    preco: V,
    estoque: V,
    avaliacao: V,
    formatar(valor: V): void
}

const prod1: Produto<number> = {
    nome: "Camisa",
    preco: 90,
    estoque: 5,
    avaliacao: 8.5,
    formatar(valor: number): void {
        console.log("Oiee:", valor)
    }
}

console.log(prod1)
prod1.formatar(15)