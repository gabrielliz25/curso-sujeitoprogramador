class Conta {
    private saldo: number = 0;

    private aumentar(valor: number): void {
        if (valor <= 0) {
            throw new Error("Valor inválido");
        }

        this.saldo += valor
        console.log("Saldo alterado!")
    } 

    estaSolicitado(auth: boolean, quantity: number): void {
        if (auth) {
            this.aumentar(quantity)
        } else {
            console.log("Usuário não está logado")
        }
    }
}   

const c1 = new Conta()

// c1.saldo = 99 -> ERRO: saldo é private

c1.estaSolicitado(true, 10)
c1.estaSolicitado(false, 15)
console.log(c1)