type Status = "ABERTO" | "FECHADO";

class Loja {
    nome: string;
    categoria: string;
    status: Status;

    constructor(nome: string, categoria: string) {
        this.nome = nome;
        this.categoria = categoria;
        this.status = "FECHADO";
    }

    showLoja() {
        console.log(`Loja: ${this.nome} - Categoria: ${this.categoria}`);
    }

    emitirPedido(mesa: number, ...pedidos: string[]): void {
        console.log(`Pedido na mesa: ${mesa}`);

        // for (let index in pedidos) {
        //     console.log(`Pedido n° ${index}: ${pedidos[index]}`)
        // }

        pedidos.forEach((pedido, index) => {
            console.log(`Pedido n° ${index + 1}: ${pedido}`);
        });
    }

    mudarStatus(): void {
        this.status = this.status === "ABERTO" ? "FECHADO" : "ABERTO";
    }
}

const loja1 = new Loja("Burger King", "Alimentos");

console.log(loja1);
loja1.showLoja();
loja1.emitirPedido(
    3,
    "Hamburger duplo chedar",
    "batata fritas",
    "coca cola",
    "cokkie",
);
loja1.mudarStatus();
console.log(loja1);

