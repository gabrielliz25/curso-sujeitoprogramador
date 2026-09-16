import { useState, useEffect } from "react";
import { db } from "./config/firebase";
import {
    collection,
    addDoc,
    onSnapshot,
    doc,
    deleteDoc,
    updateDoc,
} from "firebase/firestore";

const App = () => {
    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
            const lista = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setUsers(lista);
        });

        return () => unsub();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!nome || !email) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);
        await addDoc(collection(db, "users"), {
            nome: nome,
            email: email,
        })
            .then(() => {
                console.log("Usuário cadastrado com sucesso!");
                setNome("");
                setEmail("");
                setLoading(false);
            })
            .catch((err) => console.log("Erro:", err));
    };

    const handleDelete = async (id) => {
        const docRef = doc(db, "users", id);
        await deleteDoc(docRef)
            .then(() => {
                console.log("Item deletado com sucesso!");
            })
            .catch((err) => {
                alert("Erro ao deletar documento!");
                console.log(err);
            });
    };

    const handleEdit = async (user) => {
        setNome(user.nome);
        setEmail(user.email);
        setId(user.id);
    };

    const editSubmit = async (e) => {
        e.preventDefault();
        if (!nome || !email) {
            alert("preencha os dados");
            return;
        }

        const docRef = doc(db, "users", id);
        setLoading(true)
        await updateDoc(docRef, {
            nome: nome,
            email: email,
        })
        .then(() => {
            console.log("Usuário atualizado com sucesso!");
            setNome("");
            setEmail("");
            setId("");
            setLoading(false);
        })
        .catch(err => console.log(err))
    };

    return (
        <>
            <div>
                <form>
                    <input type="hidden" value={id} />
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />{" "}
                    <br />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />{" "}
                    <br />
                    <button onClick={handleSubmit}>
                        {loading ? "Cadastrando..." : "Cadastrar"}
                    </button>
                    <button onClick={editSubmit}>
                        {loading ? "Atualizando..." : "Atualizar"}
                    </button>
                </form>

                {users &&
                    users.map((user) => (
                        <>
                            <p>
                                {user.nome} - {user.email}{" "}
                                <button onClick={() => handleDelete(user.id)}>
                                    Excluir
                                </button>
                                <button onClick={() => handleEdit(user)}>
                                    Editar
                                </button>
                            </p>
                            <hr />
                        </>
                    ))}
            </div>
        </>
    );
};

export default App;
