let num1: unknown = 1;
let num2: number = 0

// estou afirmando que num1 é number
num2 = num1 as number

num2 = <number>num1

console.log(num2)
