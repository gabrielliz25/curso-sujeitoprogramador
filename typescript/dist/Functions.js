"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// função com parametros tipado
function saudacao(text) {
    return text;
}
console.log(saudacao("Olá"));
// Função com retorno tipado
function calcularDobro(num) {
    return `Valor: ${num * 2}`;
}
console.log(calcularDobro(3));
// tipo void -> nao retorna nada
function mostraText(text) {
    console.log("Texto:", text);
}
mostraText("Hellou");
// Função de soma
function somar(valor1, valor2) {
    return valor1 + valor2;
}
console.log(somar(1, 4));
// Arrows Functions
const subtrair = (v1, v2) => {
    return v1 - v2;
};
console.log(subtrair(10, 2));
//# sourceMappingURL=Functions.js.map