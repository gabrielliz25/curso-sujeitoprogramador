import { applyMixins } from "./ApllyMixin"

class Automovel {
    ligar() {
        console.log("CARRO LIGADO")
    }

    desligar() {
        console.log("CARRO DESLIGADO")
    }
}

class Especificacao {
    descricao: string

    constructor(desc: string) {
        this.descricao = desc
    }
}

// interface Carro extends Automovel, Especificacao{}

class Carro implements Automovel, Especificacao {
    descricao: string = ""
    ligar!: () => void
    desligar!: () => void
}

applyMixins(Carro, [Automovel, Especificacao])

const gol = new Carro()
gol.descricao = "Gol 2.0"
gol.ligar()
console.log(gol)