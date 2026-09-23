"use strict";
/*
    * GENERICS
    ? >> Permite criar estruturas que serão adaptáveis a varios tipos de dados.
    ? Ajudando a reaproveitar melhor o código e deixá-lo mais flexível

    * Podemos usar os generics
    ? >> Funcoes | interfaces | Types | classes
*/
Object.defineProperty(exports, "__esModule", { value: true });
/*
    * Nomenclaturas (padrões):
    ? >> S -> State
    ? >> T -> Type/tipo
    ? >> K -> Key
    ? >> V -> Value
    ? >> E -> Element
    
*/
// function repositorio() {
//     let dados: number | string;
//     function getDados() {
//         return dados;
//     }
//     function setDados(novoDado: number | string) {
//         dados = novoDado
//     }
//     return { getDados, setDados }
// }
function repositorio() {
    let dados;
    function getDados() {
        return dados;
    }
    function setDados(novoDado) {
        dados = novoDado;
    }
    return { getDados, setDados };
}
// Apenas strings
// ! Defini que a função inteira <T> -> vai ser representado por um number
const repo1 = repositorio();
repo1.setDados(10);
// repo1.setDados("15"); -> ERRO, aceita apenas number
console.log(repo1.getDados());
//# sourceMappingURL=Generics.js.map