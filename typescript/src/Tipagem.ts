// Tipagem Dinâmica
const nome = "Gabriel"; // nome: string
const numeros = [1, 2, 3, 4, 5]; // numeros: number

// nome = 123 -> Erro: Tipagem errada => "Number" diferente de "String"

// numeros.push("opa") -> Erro: Tipagem errada => "String" diferente de "Number"

console.log(nome);
console.log(numeros);

// ------------------------------------

// TYPE STRING
let nome1: string;
nome1 = "Gabriel Liz";
// nome1 = 12 -> Erro de tipagem

console.log(nome1);

// ------------------------------------

// TYPE NUMBER
// Valores permitidos: int, float, hex, binary

let num1: number;
num1 = 10
// num1 = "teste" -> Erro de tipagem

let num2: number = 5
let num3: number = 10.5 

console.log(num1, num2, num3)

// ------------------------------------

// TYPE ANY -> aceita qualquer valor

let valor1: any = "teste"
valor1 = 10
valor1 = true
valor1 = null

console.log(valor1)

// ------------------------------------

// TYPE BOOLEAN -> true ou false

let status: boolean = true
status = false
// status = "opa" -> Erro de tipagem

console.log(status)

// ------------------------------------

// TYPE ARRAY -> <tipo>[]
// Array<string>

// Array<string | number>
// (string | number)[]

let frutas: string[] = ["banana", "uva", "melancia", "laranja"]
frutas.push("abacaxi")
// frutas.push(10) Erro de tipagem
console.log(frutas)

// ------------------------------------

// TYPE OBJECT

let usuario: object = {
    nome: "Gabriel",
    idade: 19
}

console.log(usuario)

// ------------------------------------

// TYPE UNDEFINED - NULL

let valor2: undefined; // undefined -> variavel sem valor nenhum, apenas criada
let valor3: null = null // null -> ausencia de valor explicitamente

// ------------------------------------

// TYPE UNKOWN -> quando voce nao sabe o que vai receber
let total: unknown;

total = 100
total = "opa"
total = {
    total: 100
}

console.log(total)

