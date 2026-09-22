// Herança -> quando a classe pai passa todos os atributos e metodos para a classe filho

class Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        ((this.nome = nome), (this.email = email));
    }
}

class Admin extends Usuario {
    cargo: string;
    password: number;

    constructor(nome: string, email: string, cargo: string, password: number) {
        // ! chamando a classe Pai, passando os atributos
        super(nome, email);
        ((this.cargo = cargo), (this.password = password));
    }
}

const adm = new Admin("Gabriel", "gabriel@gmail.com", "Programador", 1234)
console.log(adm)