type Pessoa = {
    nome: string;
    sobrenome: string;
    idade: number;
};

function createPeople(nome: string, sobrenome: string, idade: number): Pessoa {
    return {
        nome,
        sobrenome,
        idade,
    };
}

function alterarNome(pessoa: Pessoa, novoNome: string) {
    pessoa.nome = novoNome
}

// ! não posso ter multiplos "export default" no mesmo arquivo
export default alterarNome
export { createPeople };
