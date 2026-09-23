function setIpServidor(novoIp: string) {
    return (target: any) => {
        // target = a classe Servidor
        return class extends target {
            // aqui estou criando uma classe nova que herda tudo de Servidor
            // e estou adicionado o "ip"
            ip = novoIp
        }
    }
}

@setIpServidor("192.000.1.22")
class Servidor {

}

const server1 = new Servidor()
console.log(server1)


// o que você escreve
// @setIpServidor("192.000.1.22")
// class Servidor {}

// o que o TypeScript executa
// Servidor = setIpServidor("192.000.1.22")(Servidor)
//                                          ^^^^^^^^
//                                       isso é o target

/*
Como se fizesse isso manualmente
class ServidorComIp extends Servidor {
  ip = "192.000.1.22"
}
*/

// Mesmo você tendo criado uma classe Servidor vazia, o decorator substituiu ela por uma versão com ip.