"use strict";
// Herança -> quando a classe pai passa todos os atributos e metodos para a classe filho
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    email;
    constructor(nome, email) {
        ((this.nome = nome), (this.email = email));
    }
}
class Admin extends Usuario {
    cargo;
    password;
    constructor(nome, email, cargo, password) {
        // ! chamando a classe Pai, passando os atributos
        super(nome, email);
        ((this.cargo = cargo), (this.password = password));
    }
}
const adm = new Admin("Gabriel", "gabriel@gmail.com", "Programador", 1234);
console.log(adm);
//# sourceMappingURL=Classes-herancas.js.map