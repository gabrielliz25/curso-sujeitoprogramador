import { useState } from "react";
import { db } from "./config/firebase";
import { doc, setDoc, addDoc, collection, getDoc } from "firebase/firestore";

const App = () => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const adicionar = async (evt) => {
        evt.preventDefault();
        // await setDoc(doc(db, "posts", "789"), {
        //     titulo: titulo,
        //     autor: autor,
        // })
        //     .then(() => {
        //         console.log("Dados Cadastrados no Banco");
        //     })
        //     .catch((err) => console.log("ERRO:", err));

        await addDoc(collection(db, "posts"), {
            titulo: titulo,
            autor: autor,
        })
            .then(() => console.log("Dados Cadastrados no Banco"))
            .catch((err) => console.log("ERRO:", err));
    };

    async function buscar() {
        const post = doc(db, "posts", "456");

        await getDoc(post)
            .then((snapshot) => {
                setTitulo(snapshot.data().titulo);
                setAutor(snapshot.data().autor);
            })
            .catch((err) => console.log("ERRO AO BUSCAR", err));
    }

    return (
        <>
            <form onSubmit={adicionar}>
                <input
                    type="text"
                    placeholder="Digite o titulo"
                    onChange={(evt) => setTitulo(evt.target.value)}
                    value={titulo}
                />
                <br />
                <input
                    type="text"
                    placeholder="Digite o autor"
                    onChange={(evt) => setAutor(evt.target.value)}
                    value={autor}
                />
                <br />
                <button type="submit">Cadastrar</button>
                <button onClick={buscar}>Buscar Item</button>
            </form>
        </>
    );
};

export default App;
