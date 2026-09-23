"use strict";
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
// Propriedade Decorator
function validaNome(tamanho) {
    return (target, key) => {
        // console.log(key) -> nome
        // console.log(target[key])
        let valor = target[key];
        const getter = () => valor;
        const setter = (value) => {
            if (value.length < tamanho) {
                console.log("Tamanho muito pequeno");
            }
            else {
                valor = value;
            }
        };
        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}
class Pessoa {
    constructor(n) {
        this.nome = n;
    }
}
__decorate([
    validaNome(5),
    __metadata("design:type", String)
], Pessoa.prototype, "nome", void 0);
const p1 = new Pessoa("tes");
console.log(p1);
//# sourceMappingURL=propriedades.js.map