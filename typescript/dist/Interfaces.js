"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createPessoa(nome, age, vivo, sobrenome) {
    return {
        nome,
        age,
        vivo,
        sobrenome: sobrenome || "sem sobrenome",
    };
}
const p1 = {
    nome: "Gabriel",
    age: 19,
    vivo: true,
    // sobrenome: "Liz"
};
const p2 = createPessoa("Gabriel", 19, true, "Liz");
const p3 = createPessoa("Gabriel", 19, true);
console.log(p1);
console.log(p2);
console.log(p3);
// ---------------------------------
//# sourceMappingURL=Interfaces.js.map