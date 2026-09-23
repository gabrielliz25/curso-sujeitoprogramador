type Pessoa = {
    nome: string;
    sobrenome: string;
    idade: number;
};
declare function createPeople(nome: string, sobrenome: string, idade: number): Pessoa;
declare function alterarNome(pessoa: Pessoa, novoNome: string): void;
export default alterarNome;
export { createPeople };
//# sourceMappingURL=createPeople.d.ts.map