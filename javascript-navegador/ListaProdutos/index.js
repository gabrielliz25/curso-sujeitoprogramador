const listProduts = ["Computado", "Telefone", "Mouse", "Teclado"]
console.log("Quantidade:", listProduts.length)

// Remova o elemento "Mouse"
const indexItem = listProduts.indexOf("Mouse")
listProduts.splice(indexItem, 1)
console.log(listProduts)

// Procurando elemento "Computador"
const busca = listProduts.find(el => {
    if (el === "Computador") {
        return "Computador Encontrado"
    } else {
        return "Computador não encontrado"
    }
})
console.log(busca)