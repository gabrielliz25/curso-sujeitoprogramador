const listProduts = ["Computador", "Telefone", "Mouse", "Teclado"]
console.log("Quantidade:", listProduts.length)

// Remova o elemento "Mouse"
const indexItem = listProduts.indexOf("Mouse")
listProduts.splice(indexItem, 1)
console.log(listProduts)

// Procurando elemento "Computador"
const busca = listProduts.find(el => el === "Computador")
console.log(busca ? "Computador encontrado" : "Computador não encontrado")

console.log(" ")

const listNumers = [1, 3, 5, 7, 0, 9]
console.log("Lista ordenada:", listNumers.sort())

// Remover o primeiro numero
const numRemovido = listNumers.shift()
console.log(listNumers, numRemovido)

// Inverter ordem
console.log("Lista inversa:", listNumers.sort().reverse())