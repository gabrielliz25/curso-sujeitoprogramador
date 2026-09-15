import { useEffect, useState } from "react";
import { toast } from "react-toastify"
import "./Favoritos.css"

const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([])

    useEffect(() => {
        function loadFavoritos() {
            const filmesFavoritos = localStorage.getItem("primeflix") || []
            const jsonFilmes = JSON.parse(filmesFavoritos)
            setFavoritos(jsonFilmes)
        }

        loadFavoritos()
    }, [])

    const deleteFilm = (id) => {
        const novaLista = favoritos.filter(filme => filme.id !== id)
        localStorage.setItem("primeflix", novaLista)
        setFavoritos(novaLista)
        toast.info("Filme removido da lista de favoritos")
    }

    return <div className="container">
        {favoritos && favoritos.map(filme => (
            <div className="card-favorite">
                <div className="info">
                    <h2>{filme.title}</h2>
                </div>
                <div className="acts">
                    <button onClick={() => deleteFilm(filme.id)}>Excluir</button>
                </div>
            </div>
        ))}
    </div>;
};

export default Favoritos;
