import { useState } from "react";
import { db } from "../config/firebase";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";

const AddItem = () => {
    const [titulo, setTitulo] = useState("");
    const [autor, setAutor] = useState("");

    const adicionar = async (evt) => {
        evt.preventDefault();
        // await setDoc(doc(db, "posts", "789"), {
        //     titulo: titulo,
        //     autor: autor,
        // })
            // .then(() => {
        //         console.log("Dados Cadastrados no Banco");
        //     })
        //     .catch((err) => console.log("ERRO:", err));

        if (titulo === "" || autor === "") {
            alert("Preencha todos os campos");
            return;
        }

        await addDoc(collection(db, "posts"), {
            titulo: titulo,
            autor: autor,
        })
            .then(() => {
                setAutor("");
                setTitulo("");
                alert("Dados Cadastrados no Banco");
            })
            .catch((err) => console.log("ERRO:", err));
    };

    async function buscar(evt) {
        evt.preventDefault();
        const post = doc(db, "posts", "LmRfWXjv2C75OsuDOj0M");

        await getDoc(post)
            .then((snapshot) => {
                setTitulo(snapshot.data().titulo);
                setAutor(snapshot.data().autor);
            })
            .catch((err) => console.log("ERRO AO BUSCAR", err));
    }

    return (
        <>
            <form>
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
                <button onClick={adicionar}>Cadastrar</button>
                <button onClick={buscar}>Buscar Item</button>
            </form>
        </>
    );
};

export default AddItem;
