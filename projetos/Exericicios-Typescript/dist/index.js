"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tasks = [];
function concluirTask(task) {
    if (task.status !== "pendente") {
        throw new Error(`${task.nome} já foi concluido`);
    }
    task.status = "concluido";
}
function createTask(nome, date = new Date()) {
    const dataHoje = new Date();
    if (date < dataHoje) {
        throw new Error("Erro: Data inválida");
    }
    const task = {
        id: tasks.length + 1,
        nome,
        status: "pendente",
        dataConcluir: date,
        createdAt: dataHoje,
    };
    return task;
}
const task1 = createTask("Tomar banho");
const task2 = createTask("Tomar banho", new Date(2026, 8, 25));
console.log(task2);
concluirTask(task1);
console.log(task1);
//# sourceMappingURL=index.js.map