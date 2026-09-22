class ContaBancaria {
    private saldo: number;
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
        this.saldo = 0;
    }

    consultarSaldo() {
        console.log(`Saldo atual: R$ ${this.saldo},00`);
    }

    depositar(valor: number) {
        if (valor <= 0) {
            throw new Error("Valor inválido, insira um valor positivo");
        }

        this.saldo += valor;
    }

    sacar(valor: number) {
        if (valor > this.saldo) {
            throw new Error("Valor muito alto para sacar, tente um valor menor");
        }

        this.saldo -= valor
    }
}

const conta1 = new ContaBancaria("Gabriel");

conta1.depositar(10)
// conta1.depositar(-5) -> ERRO

conta1.sacar(5)
conta1.sacar(200)

conta1.consultarSaldo()