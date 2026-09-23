"use strict";
// Decorator metodo só vai ser chamado quando o metodo for chamado
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
function verificaIdade(idadeMinima) {
    return (target, key, descriptor) => {
        // console.log("target:", target)
        // console.log("key:", key)
        // console.log("descriptor:", descriptor)
        const metodoOriginal = descriptor.value; // salvar nosso metodo original
        descriptor.value = function () {
            if (this.idade < idadeMinima) {
                console.log("Pessoa é menor de idade");
            }
            else {
                console.log("Pessoa é maior de idade");
                return metodoOriginal.apply(this);
            }
        };
    };
}
class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    showIdade() {
        console.log(`${this.nome} tem ${this.idade} anos`);
    }
}
__decorate([
    verificaIdade(18),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Pessoa.prototype, "showIdade", null);
const p1 = new Pessoa("Gabriel", 14);
p1.showIdade();
//# sourceMappingURL=metodo.js.map