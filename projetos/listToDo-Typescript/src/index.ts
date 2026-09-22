type StatusProps = "pendente" | "concluido";
type FilterProps = "tasks-pendentes" | "tasks-concluidas";

interface Task {
    id: number;
    nome: string;
    status: StatusProps;
    dataConcluir: Date;
    createdAt: Date;
}

const tasks: Task[] = [];

function concluirTask(task: Task): void {
    if (task.status !== "pendente") {
        throw new Error(`${task.nome} já foi concluido`);
    }
    task.status = "concluido";
}

function createTask(nome: string, date: Date = new Date()): Task {
    const dataHoje = new Date();

    if (date < dataHoje) {
        throw new Error("Erro: Data inválida");
    }

    const task: Task = {
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


