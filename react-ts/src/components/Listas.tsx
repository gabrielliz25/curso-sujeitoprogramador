import { useState, useEffect, useRef, useMemo } from "react";

const Listas = () => {
    const [tasks, setTasks] = useState<string[]>(() => {
        const local = localStorage.getItem("@tasks");

        if (!local) {
            return [];
        }

        const parsed = JSON.parse(local);

        return Array.isArray(parsed) ? parsed : [];
    });
    const inputRef = useRef<HTMLInputElement>(null)
    const [input, setInput] = useState("");
    const [edit, setEdit] = useState({
        enabled: false,
        task: "",
    });

    useEffect(() => {
        localStorage.setItem("@tasks", JSON.stringify(tasks));
    }, [tasks]);

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
        localStorage.setItem("@tasks", JSON.stringify(input));
        setInput("");
    };

    const handleDelete = (item: string) => {
        const removeTasks = tasks.filter((task) => task !== item);
        setTasks(removeTasks);
    };

    const handleEdit = (item: string) => {
        inputRef.current?.focus()
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
            task: "",
        });
    };

    const totalTarefas = useMemo(() => {
        return tasks.length
    }, [tasks])

    return (
        <div>
            <input
                type="text"
                placeholder="Digite uma tarefa"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                ref={inputRef}
            />
            <button onClick={handleAdd}>
                {edit.enabled ? "Editar tarefa" : "Adicionar tarefa"}
            </button>
            <br />
            <span>Você tem {totalTarefas} tarefas!</span>
            <br /><br />
            {tasks &&
                tasks.map((item, index) => (
                    <p>
                        {index + 1}. {item}{" "}
                        <button onClick={() => handleDelete(item)}>
                            Excluir
                        </button>
                        <button onClick={() => handleEdit(item)}>Editar</button>
                    </p>
                ))}
        </div>
    );
};

export default Listas;
