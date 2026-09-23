// Decorator metodo só vai ser chamado quando o metodo for chamado

function verificaIdade(idadeMinima: number) {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        // console.log("target:", target)
        // console.log("key:", key)
        // console.log("descriptor:", descriptor)
    
        const metodoOriginal = descriptor.value // salvar nosso metodo original

        descriptor.value = function (this: any) {
            if (this.idade < idadeMinima) {
                console.log("Pessoa é menor de idade")
            } else {
                console.log("Pessoa é maior de idade")
                return metodoOriginal.apply(this)
            }
        }
    }
}

class Pessoa {
    nome: string
    idade: number

    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    @verificaIdade(18)
    showIdade() {
        console.log(`${this.nome} tem ${this.idade} anos`)
    }
}

const p1 = new Pessoa("Gabriel", 14)

p1.showIdade()