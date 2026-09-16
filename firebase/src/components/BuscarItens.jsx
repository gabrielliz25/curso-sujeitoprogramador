import { useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const BuscarItems = () => {
    const [posts, setPosts] = useState([]);

    const buscar = async () => {
        const postRef = collection(db, "posts");

        await getDocs(postRef)
            .then((snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        autor: doc.data().autor,
                    });
                });

                setPosts(lista);
            })
            .catch((err) => console.log("ERRO AO BUSCAR", err));
    };

    return (
        <>
            <button onClick={buscar}>Buscar</button>
            <div>
                {posts &&
                    posts.map((post) => (
                        <>
                            <span>
                                <span>{post.id}</span>
                                <h3>{post.titulo}</h3>
                                <p>Por: {post.autor}</p>
                            </span>
                            <hr />
                        </>
                    ))}
            </div>
        </>
    );
};

export default BuscarItems;
