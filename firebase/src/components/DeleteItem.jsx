import { db } from "../config/firebase";
import { doc, deleteDoc } from "firebase/firestore";

const DeleteItem = ({ id }) => {
    const deletarItem = async () => {
        const docRef = doc(db, "posts", id);
        await deleteDoc(docRef)
            .then(() => {
                alert("Documento deletado com sucesso!");
                window.location.reload();
            })
            .catch((err) => {
                alert("Erro ao deletar documento!");
                console.log(err);
            });
    };
    return <button onClick={deletarItem}>Deletar</button>;
};

export default DeleteItem;
