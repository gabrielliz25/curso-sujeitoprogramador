const arr1 = ["Gabriel", "Liz", "Ana", "Júlia"]

console.log(arr1)
console.log(arr1[0])
console.log(arr1.length)

arr1[0] = "Oiee"
console.log(arr1)

arr1.push("Nascimento")
console.log(arr1)

arr1.unshift("primeiro")
console.log(arr1)

arr1.shift()
console.log(arr1)

arr1.pop()
console.log(arr1)

console.log(arr1.join(" - "))