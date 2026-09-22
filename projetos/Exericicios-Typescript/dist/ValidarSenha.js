"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Usuario {
    nome;
    senha;
    constructor(nome, senha) {
        this.nome = nome;
        this.senha = senha;
    }
    validarSenha(senha) {
        let erros = [];
        if (senha.length < 6) {
            erros.push("Senha muito pequena");
        }
        if (!/[0-9]/.test(senha)) {
            erros.push("Senha precisa conter números");
        }
        if (!/[a-z]/.test(senha) || !/[A-Z]/.test(senha)) {
            erros.push("Senha precisa conter letras");
        }
        if (!/["!@#$%&*"]/.test(senha)) {
            erros.push("Senha precisa conter caracteres especiais");
        }
        return erros;
    }
    checarSenha() {
        let senhaChecada = this.validarSenha(this.senha);
        if (senhaChecada.length > 0) {
            console.log("Erros Encontrados:");
            senhaChecada.forEach((erro, index) => {
                console.log(`${index + 1}. ${erro}`);
            });
            console.log("===============================");
            return;
        }
        console.log("Senha forte");
    }
    alterarSenha(senha) {
        let senhaChecada = this.validarSenha(senha);
        if (senhaChecada.length > 0) {
            console.log("Senha muito fraco, deixe ela mais forte");
            return;
        }
        this.senha = senha;
        console.log("Senha alterada com sucesso!!!");
    }
}
const user1 = new Usuario("Gabriel", "123456");
user1.alterarSenha("123Aa#");
console.log(user1);
// user1.checarSenha()
//# sourceMappingURL=ValidarSenha.js.map