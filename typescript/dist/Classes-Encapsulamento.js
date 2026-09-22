"use strict";
/*
    public -> todos podem mover, mexer, alterar, etc (padrão)
    readonly -> apenas ver o atributo, não pode modificar, dentro e fora da classe

    protected >> atributos e metodos podem ser alterados ou acessados por meio da classe em que foram criadas e por meio das classes que foram filhas (que extende a classe Pai)

    private >> podem ser acessadas ou alteradas apenas por meio da classe que foi criada, ou seja ele não pode ser acessado ou modificado fora desta classe em que foi criado
*/
Object.defineProperty(exports, "__esModule", { value: true });
class Lanchonete {
    id;
    nome;
    cidade;
    constructor(id, nome, cidade) {
        this.id = id;
        this.nome = nome;
        this.cidade = cidade;
    }
}
class BurgerKing extends Lanchonete {
    preco;
    logo;
    constructor(id, nome, cidade, preco, logo) {
        super(id, nome, cidade);
        this.preco = preco;
        this.logo = logo;
    }
    mostrarInfos() {
        console.log(`ID do Usuário: ${this.id}`);
    }
    checarStatus(status) {
        if (status) {
            this.mostrarInfos();
        }
    }
}
const bk = new BurgerKing(1, "BurgerKing", "Pomerode", 20.99, "BK Lanches");
// Protected
// bk.id = 123 -> ERRO: id é protected
// bk.mostrarInfos()
console.log(bk);
bk.checarStatus(false);
//# sourceMappingURL=Classes-Encapsulamento.js.map