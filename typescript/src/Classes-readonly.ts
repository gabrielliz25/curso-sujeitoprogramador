class Pessoa {
    readonly nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome,
        this.email = email
    }

    showInfos(): void {
        // this.nome = "opa" ERRO: propriedade é readonly
        console.log(`${this.nome} - ${this.email}`)
    }
}

const p1 = new Pessoa("Gabriel", "gabriel@gmail.com")
// p1.nome = "teste" ERRO: propriedade é readonly
console.log(p1)

