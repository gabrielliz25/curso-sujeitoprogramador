let listElements = document.getElementById("tasks")
let input = document.getElementById("task")
let button = document.getElementById("btn")

let tarefas = JSON.parse(localStorage.getItem("@listaTarefas")) || []
renderTasks()

function adicionarTarefas() {
    if (input.value === "") {
        alert("Digite alguma tarefa")
        return false
    }

    tarefas.push(input.value)
    input.value = " "
    renderTasks()
    salvarDados()
}

function renderTasks() {
    // for(let i = 0; i < tarefas.length; i++) {
    //     const newEl = document.createElement("li")
    //     newEl.innerText = tarefas[i]
    //     listElements.appendChild(newEl)
    //     console.log("opa")
    // }
    listElements.innerText = ""
    tarefas.map(task => {
        const newEl = document.createElement("li")
        newEl.innerText = task
        
        let posicao = tarefas.indexOf(task)

        const linkEl = document.createElement("a")
        linkEl.setAttribute("href", "#")
        linkEl.setAttribute("onclick", `delTask(${posicao})`)
        linkEl.innerText = "Excluir"
        
        newEl.appendChild(linkEl)
        listElements.appendChild(newEl)
    })
}

function delTask(posicao) {
    tarefas.splice(posicao, 1)
    renderTasks()
    salvarDados()
}

function salvarDados() {
    localStorage.setItem("@listaTarefas", JSON.stringify(tarefas))

}

button.addEventListener("click", adicionarTarefas)