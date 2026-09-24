import { useState } from "react";

const Listas = () => {
    const [tasks, setTasks] = useState([
        "Comprar pão",
        "Tomar banho",
        "Estudar programação",
    ]);
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState({
        enabled: false,
        task: "",
    });

    const handleAdd = () => {
        if (!input) {
            alert("Preencha o nome da tarefa");
            return;
        }
        if (edit.enabled) {
            handleSaveEdit();
            
            return;
        }

        setTasks((prevTasks) => [...prevTasks, input]);
        setInput("");
    };

    const handleDelete = (item: string) => {
        const removeTasks = tasks.filter((task) => task !== item);
        setTasks(removeTasks);
    };

    const handleEdit = (item: string) => {
        setInput(item);
        setEdit({
            enabled: true,
            task: item,
        });
    };

    const handleSaveEdit = () => {
        const taskFind = tasks.findIndex((task) => task === edit.task);
        const allTasks = [...tasks];

        allTasks[taskFind] = input;
        setTasks(allTasks);
        setInput("");
        setEdit({
            enabled: false,
            task: ""
        })
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleAdd}>
                {edit.enabled ? "Editar tarefa" : "Adicionar tarefa"}
            </button>
            {tasks.map((item, index) => (
                <p>
                    {index + 1}. {item}{" "}
                    <button onClick={() => handleDelete(item)}>Excluir</button>
                    <button onClick={() => handleEdit(item)}>Editar</button>
                </p>
            ))}
        </div>
    );
};

export default Listas;
