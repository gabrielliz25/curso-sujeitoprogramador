// URL: https://sujeitoprogramador.com/rn-api/?api=posts
// Consumindo api externa

const app = document.getElementById("app");

const url = "https://sujeitoprogramador.com/rn-api/?api=posts";
let posts = [];

function getPosts() {
    fetch(url) // fetch faz a reqisição, se deu certo (then), se deu errado (catch)
        .then(res => res.json())
        .then(json => {
            for (let j of json) {
                posts.push(j)
            }
            renderItens(posts)
        })
        .catch(err => console.log("ERRO ao buscar posts:", err))
    
}

function renderItens(posts) {
    for (let post of posts) {
        const card = document.createElement("div")
        const title = document.createElement("h1")
        const text = document.createElement("p")

        title.innerText = post.titulo
        text.innerText = post.subtitulo

        card.appendChild(title)
        card.appendChild(text)
        app.appendChild(card)
    }
}

getPosts();
