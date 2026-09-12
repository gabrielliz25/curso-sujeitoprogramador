// map
let lista = [1, 2, 3, 4]
lista.map(el => {
    console.log(el * el)
})

// Reduce
let soma = lista.reduce((valor, total) => {
    return total += valor
}, 0)
console.log(soma)

// Find
console.log(lista.find(el => el === 2))

