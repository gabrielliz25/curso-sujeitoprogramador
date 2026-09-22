class Usuario {
    public nome: string
    private senha: string
    
    constructor(nome: string, senha: string) {
        this.nome = nome
        this.senha = senha
    }

    private validarSenha(senha: string): string[] {
        let erros: string[] = []

        if (senha.length < 6) {
            erros.push("Senha muito pequena")
        }

        if (!/[0-9]/.test(senha)) {
            erros.push("Senha precisa conter números")
        }

        if(!/[a-z]/.test(senha) || !/[A-Z]/.test(senha)) {
            erros.push("Senha precisa conter letras")
        }

        if(!/["!@#$%&*"]/.test(senha)) {
            erros.push("Senha precisa conter caracteres especiais")
        }

        return erros
    }

    checarSenha(): void {
        let senhaChecada = this.validarSenha(this.senha)

        if (senhaChecada.length > 0) {
            console.log("Erros Encontrados:")
            senhaChecada.forEach((erro, index) => {
                console.log(`${index + 1}. ${erro}`)
            })
            console.log("===============================")
            return
        }

        console.log("Senha forte")
    }

    alterarSenha(senha: string): void {
        let senhaChecada = this.validarSenha(senha)

        if (senhaChecada.length > 0) {
            console.log("Senha muito fraco, deixe ela mais forte")
            return
        }

        this.senha = senha
        console.log("Senha alterada com sucesso!!!")
    }
}

const user1 = new Usuario("Gabriel", "123456")


user1.alterarSenha("123Aa#")
console.log(user1)

// user1.checarSenha()