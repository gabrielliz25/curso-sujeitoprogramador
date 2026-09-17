const nome = "Gabriel"
console.log("Bem vindo", nome)

class Pessoa {
    teste(txt: string): void {
        console.log("Opa", txt)
    }
}
const p1 = new Pessoa()
console.log(p1.teste("Eita"))