function escolher() {
    const val = prompt("Escolha de 1 a 4:");
    console.log(typeof val);
    switch (val) {
        case "1":
            renderElement("Você escolheu Água 🫗");
            break;
        case "2":
            renderElement("Você escolheu Café ☕");
            break;
        case "3":
            renderElement("Você escolheu Nescau 🍵");
            break;
        case "4":
            renderElement("Você escolheu Chimarrão 🧉");
            break;
        default:
            renderElement("Escolha um valor adequado!");
            break;
    }
}

function renderElement(text) {
    const paragrafo = document.getElementById("paragrafo");
    paragrafo.innerText = text;
}