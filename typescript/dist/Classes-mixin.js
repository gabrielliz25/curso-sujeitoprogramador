"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApllyMixin_1 = require("./ApllyMixin");
class Automovel {
    ligar() {
        console.log("CARRO LIGADO");
    }
    desligar() {
        console.log("CARRO DESLIGADO");
    }
}
class Especificacao {
    descricao;
    constructor(desc) {
        this.descricao = desc;
    }
}
// interface Carro extends Automovel, Especificacao{}
class Carro {
    descricao = "";
    ligar;
    desligar;
}
(0, ApllyMixin_1.applyMixins)(Carro, [Automovel, Especificacao]);
const gol = new Carro();
gol.descricao = "Gol 2.0";
gol.ligar();
console.log(gol);
//# sourceMappingURL=Classes-mixin.js.map