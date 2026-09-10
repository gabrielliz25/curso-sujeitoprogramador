const titulo = document.getElementById("titulo");

function entrar() {
    const nome = prompt("Qual o seu nome?");

    if (nome === "" || nome === null) {
        alert("Ops algo deu errado");
        titulo.innerHTML = "Clique em 'ok' para acessar";
    } else {
        titulo.innerHTML = `Bem vindo ${nome} <br>`;
    
        const button = document.createElement("button") // criando elemento
        button.innerText = "Sair da conta" // aplicando texto
        button.onclick = sair // aplicando uma função quando clicar
        titulo.appendChild(button) // adicionando elemento
    }
}

function sair() {
    alert("Até mais...")
    titulo.innerText = "Você saiu da sua conta"
}