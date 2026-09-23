// Propriedade Decorator
function validaNome(tamanho: number) {
    return (target: any, key: string) => {
        // console.log(key) -> nome
        // console.log(target[key])

        let valor = target[key];

        const getter = () => valor;

        const setter = (value: string) => {
            if (value.length < tamanho) {
                console.log("Tamanho muito pequeno")
            } else {
                valor = value;
            }
        };

        Object.defineProperty(target, key, {
            get: getter,
            set: setter,
        });
    };
}

class Pessoa {
    @validaNome(5)
    nome: string;

    constructor(n: string) {
        this.nome = n;
    }
}

const p1 = new Pessoa("tes");
console.log(p1);
