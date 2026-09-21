// função com parametros tipado
function saudacao(text: string) {
    return text
}
console.log(saudacao("Olá"))

// Função com retorno tipado
function calcularDobro(num: number): string {
    return `Valor: ${num * 2}`
}
console.log(calcularDobro(3))

// tipo void -> nao retorna nada
function mostraText(text: string): void {
    console.log("Texto:", text)
}
mostraText("Hellou")

// Função de soma
function somar(valor1: number, valor2: number): number {
    return valor1 + valor2
}
console.log(somar(1, 4))

// Arrows Functions
const subtrair = (v1: number, v2: number): number => {
    return v1 - v2
}
console.log(subtrair(10, 2))