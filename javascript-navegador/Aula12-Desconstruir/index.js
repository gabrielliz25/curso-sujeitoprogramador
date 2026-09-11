const obj1 = {
    nome: "Gabriel",
    sobrenome: "Liz",
    idade: 19,
    cargo: "Programador",
    vivo: true
}

const { cargo: profissao, nome } = obj1

console.log(nome)
// console.log(cargo)
console.log(profissao)