function calcular(evt) {
    evt.preventDefault();

    let peso = isNumber(document.getElementById("peso").value);
    let altura = isNumber(document.getElementById("altura").value);

    if (!peso || !altura || peso < 0 || altura < 0) return;

    const imc = peso / (altura ** 2);
    const resultado = verificarIMC(imc);
    renderResult(resultado, imc.toFixed(2));
}

function verificarIMC(val) {
    if (val >= 25) {
        return "Acima do peso";
    } else if (val >= 18.5) {
        return "Peso normal";
    } else if (val >= 17) {
        return "Abaixo do peso";
    } else {
        return "Muito abaixo do peso";
    }
}

function renderResult(res, imc) {
    const caixa = document.getElementById("resposta");
    caixa.innerText = `IMC: ${imc} - ${res}`;
}

function isNumber(valor) {
    const texto = String(valor).trim();
    if (texto === "") return null;

    const numero = Number(texto);

    return Number.isFinite(numero) ? numero : null;
}
