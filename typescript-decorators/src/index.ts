/*
    * DECORATORS
    ? Classes
    ? Propriedades
    ? Métodos
    ? Parametros (bem pouco usado)
    ? GETTERS - SETTERS (bem pouco usado)
*/

// ! target -> recebe o construtor da classe
// function logInfo(target: any) {
//     console.log(target)
//     console.log("Sistema online")
// }   

// ? >> padrão factory (fabrica) | funcao que vai retornar a criação do decorator
function logInfo(message: string) {
    return (target: any) => {
        console.log(`${message}, ${target}`)
    }
} 

@logInfo("Servidor rodando")
class Sistema {

}

const sistema1 = new Sistema()
