"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function somarTudo(...nums) {
    return nums.reduce((acum, valor) => {
        return acum + valor;
    }, 0);
}
console.log(somarTudo(1, 2, 3, 4, 5));
//# sourceMappingURL=RestParams.js.map