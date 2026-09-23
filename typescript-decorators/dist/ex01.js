"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function setIpServidor(novoIp) {
    return (target) => {
        // target = a classe Servidor
        return class extends target {
            constructor() {
                super(...arguments);
                // aqui estou criando uma classe nova que herda tudo de Servidor
                // e estou adicionado o "ip"
                this.ip = novoIp;
            }
        };
    };
}
let Servidor = class Servidor {
};
Servidor = __decorate([
    setIpServidor("192.000.1.22")
], Servidor);
const server1 = new Servidor();
console.log(server1);
// o que você escreve
// @setIpServidor("192.000.1.22")
// class Servidor {}
// o que o TypeScript executa
// Servidor = setIpServidor("192.000.1.22")(Servidor)
//                                          ^^^^^^^^
//                                       isso é o target
/*
Como se fizesse isso manualmente
class ServidorComIp extends Servidor {
  ip = "192.000.1.22"
}
*/
// Mesmo você tendo criado uma classe Servidor vazia, o decorator substituiu ela por uma versão com ip.
//# sourceMappingURL=ex01.js.map