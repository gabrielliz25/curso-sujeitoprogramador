"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarPromocao(preco) {
    console.log(`Promoção por apenas: R$ ${preco}`);
}
const curso1 = {
    id: "1",
    nome: "Curso de Culinária",
    preco: 350,
    promocao: mostrarPromocao
};
curso1.promocao(400);
console.log(curso1);
const somaNumeros = (valor1, valor2) => valor1 + valor2;
console.log(somaNumeros(10, 5));
//# sourceMappingURL=functions-interface.js.map