import { useState } from "react";
import { db } from "../config/firebase";
import { doc, updateDoc } from "firebase/firestore";

const EditItem = () => {
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!id || !titulo || !autor) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const docRef = doc(db, "posts", id);
        await updateDoc(docRef, {
            titulo: titulo,
            autor: autor,
        })
        .then(() => {
            setId("");
            setTitulo("");
            setAutor("");
            alert("Documento atualizado com sucesso!");
            console.log("Documento atualizado com sucesso!");
        })
        .catch(err => console.log(err))
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ID"
                value={id}
                onChange={(e) => setId(e.target.value)}
            />{" "}
            <br />
            <input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
            />{" "}
            <br />
            <input
                type="text"
                placeholder="Autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
            />{" "}
            <br />
            <button type="submit">Editar</button>
        </form>
    );
};

export default EditItem;
