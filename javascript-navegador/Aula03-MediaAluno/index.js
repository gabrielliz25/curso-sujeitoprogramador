const n1 = prompt("Digite a nota 1:")
const n2 = prompt("Digite a nota 2:")
const caixa = document.getElementById("caixa")

function calcularMedia(n1, n2) {
    if (Number.isFinite(Number(n1)) && Number.isFinite(Number(n2))) {
        n1 = Number(n1)
        n2 = Number(n2)
    }

    const media = (n1 + n2) / 2
    const elMedia = createElemento("p", media)
    console.log(elMedia)

    if (Number(elMedia.innerText) >= 7) {
        elMedia.innerText += " - Aprovado"
    } else {
        elMedia.innerText += " - Reprovado"
    }

    document.write(elMedia.innerText)
}

function createElemento(element, valor) {
    const elemento = document.createElement(element)
    elemento.innerText = valor
    return elemento
}

calcularMedia(n1, n2)