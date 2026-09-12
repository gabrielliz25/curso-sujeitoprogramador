function gerarMegaSena(num) {
    if (num < 6 || num > 9) return []
    const numerosSorteados = []

    while (numerosSorteados.length < num) {
        const numTeste = Math.round(Math.random() * 60) + 1
        if (numerosSorteados.includes(numTeste)) continue
        numerosSorteados.push(numTeste)
    }
    return numerosSorteados
}

console.log(gerarMegaSena(8))
