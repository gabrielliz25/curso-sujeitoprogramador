import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const LoadItems = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function loadPosts() {
            onSnapshot(collection(db, "posts"), (snapshot) => {
                let lista = [];

                snapshot.forEach((doc) => {
                    lista.push({
                        id: doc.id,
                        titulo: doc.data().titulo,
                        autor: doc.data().autor,
                    });
                });

                setPosts(lista);
            });
        }

        loadPosts();
    });

    return (
        <div>
            {posts &&
                posts.map((post) => (
                    <>
                        <hr />
                        <h2>{post.titulo}</h2>
                        <p>{post.autor}</p>
                    </>
                ))}
        </div>
    );
};

export default LoadItems;
