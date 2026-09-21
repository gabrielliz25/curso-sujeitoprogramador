// Union Type -> 2 tipos ao mesmo tempo

let valor1: number | string = 10

valor1 = "10"

console.log(valor1)

// Ids de usuarios
let userId: number | null = 123
userId = null
console.log(userId ? "Possui ID" : "Não possui ID")


