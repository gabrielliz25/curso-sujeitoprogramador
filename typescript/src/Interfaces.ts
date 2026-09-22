interface Pessoa {
    nome: string;
    sobrenome?: string;
    age: number;
    vivo: boolean;
}

function createPessoa(nome: string, age: number, vivo: boolean, sobrenome?: string): Pessoa {
    return {
        nome,
        age,
        vivo,
        sobrenome: sobrenome || "sem sobrenome",
    };
}

const p1: Pessoa = {
    nome: "Gabriel",
    age: 19,
    vivo: true,
    // sobrenome: "Liz"
};

const p2 = createPessoa("Gabriel", 19, true, "Liz")
const p3 = createPessoa("Gabriel", 19, true)

console.log(p1);
console.log(p2);
console.log(p3);

// ---------------------------------


