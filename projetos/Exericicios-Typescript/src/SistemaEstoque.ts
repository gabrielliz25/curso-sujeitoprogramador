interface Produto {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
}

class Loja {
    nomeLoja: string;
    private produtos: Produto[] = [];
    private totalProds: number = 0;

    constructor(nome: string) {
        this.nomeLoja = nome;
    }

    adicionarProd(nome: string, preco: number, quantidade?: number): void {

        let prod: Produto = {
            id: this.produtos.length + 1,
            nome,
            preco,
            quantidade: quantidade || 0,
        };

        let checkProd = this.checarProds(prod)
        if (!checkProd) return

        this.produtos.push(prod);
        console.log("Produto Adicionado");
        this.totalProds = this.calcularTotalProdutos();
    }

    removerProd(id: number, quantidade?: number): void {
        // let prodCurrent = this.produtos.filter(prod => prod.id === id)[0]
        let prodCurrent = this.produtos.find((prod) => prod.id === id);
        if (!prodCurrent) {
            console.log("Produto não encontrado");
            return;
        }

        prodCurrent.quantidade -= quantidade || 1;
        console.log(
            `Removido ${quantidade || 1} produto(s) de '${prodCurrent.nome}'`,
        );
        this.totalProds = this.calcularTotalProdutos();
    }

    consultarProdutos(): void {
        console.log("PRODUTOS TOTAIS NA LOJA >>", this.totalProds);
        this.produtos.forEach((prod, index) => {
            console.log("- - - - - - - - - - - - - - - - - - -");
            console.log(`${index}. ${prod.nome}`);
            console.log(`Valor: R$ ${prod.preco.toFixed(2)}`);
            console.log(`Quantidade: ${prod.quantidade}`);
        });
    }

    calcularValorEstoque(): void {
        console.log("VALOR DENTRO DO ESTOQUE:");
        let totalEstoque = 0;
        this.produtos.forEach((prod, index) => {
            let valorTotal = prod.preco * prod.quantidade;
            console.log(`${index}. ${prod.nome} >> R$ ${valorTotal.toFixed(2)}`);
            totalEstoque += valorTotal;
        });
        console.log(`Valor Total: R$ ${totalEstoque.toFixed(2)}`);
    }

    private calcularTotalProdutos(): number {
        let total = 0;
        this.produtos.forEach((prod, index) => {
            total += prod.quantidade;
        });

        return total;
    }

    private checarProds(prod: Produto): boolean {
        let tudoCerto = true
        
        if (prod.preco <= 0) {
            console.log("Não tem como adicionar produto com valor abaixo de 0")
            tudoCerto = false
        }   

        let produtoDuplicado = this.produtos.find(prodlist => prodlist.nome === prod.nome)
        if (produtoDuplicado) {
            console.log("Produto existente, favor trocar o nome")
            produtoDuplicado.quantidade += prod.quantidade
            tudoCerto = false
        }
        
        

        return tudoCerto
    }
}

const loja = new Loja("Roupas TOP");

loja.adicionarProd("Tenis Nike", 19.9, 10);
loja.adicionarProd("Camisa Regata", 39.5, 5);
loja.adicionarProd("Jaqueta de Couro", 78.4, 7);

// loja.adicionarProd("Jaqueta de Couro", 20000, 9999)
// console.log(loja)

loja.calcularValorEstoque()


