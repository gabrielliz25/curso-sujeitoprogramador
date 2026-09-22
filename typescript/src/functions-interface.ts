interface CursoProps {
    id: string,
    nome: string,
    preco: number

    // definir a funcao, o que ela espera e o que vai retornar
    promocao: (preco: number) => void
}

function mostrarPromocao(preco: number): void {
    console.log(`Promoção por apenas: R$ ${preco}`)
}

const curso1: CursoProps = {
    id: "1",
    nome: "Curso de Culinária",
    preco: 350,
    promocao: mostrarPromocao
}

curso1.promocao(400)
console.log(curso1)

// -----------------------------------

// props com apenas 1 função

interface SomaProps {
    (valor1: number, valor2: number): number
}

const somaNumeros: SomaProps = (valor1: number, valor2: number) => valor1 + valor2
console.log(somaNumeros(10, 5)) 