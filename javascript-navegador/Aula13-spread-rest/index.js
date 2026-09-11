let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]

let newArr = [...arr1, 4, 5, 6]
console.log(newArr)

// ----------------------------

let pessoa = {
    nome: "Gabriel",
    idade: 19,
    cargo: "Financeiro"
}

let novaPessoa = {
    ...pessoa,
    status: "ativo"
}

console.log(novaPessoa)

// --------------------------

function convidados(...nomes) {
    console.log("Seja bem vindo a todos os convidados")
    console.log(nomes)
}

convidados("Gabriel", "Ana", "Liz")