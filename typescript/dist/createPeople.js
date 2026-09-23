"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPeople = createPeople;
function createPeople(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
    };
}
function alterarNome(pessoa, novoNome) {
    pessoa.nome = novoNome;
}
// ! não posso ter multiplos "export default" no mesmo arquivo
exports.default = alterarNome;
//# sourceMappingURL=createPeople.js.map