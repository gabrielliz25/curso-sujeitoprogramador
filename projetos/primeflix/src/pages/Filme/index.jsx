import { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api"
import "./Filme.css"

const Filme = () => {
    const [filme, setFilme] = useState()
    const { id } = useParams();

    useEffect(() => {
        async function findByIdFilm() {
            const response = await api.get(`movie/${id}`, {
                params: {
                    api_key: "4f95de02a963d4aa056c46a840e03425",
                    language: "pt-BR"
                }
            })
            console.log(response.data)
            setFilme(response.data)

        }
        findByIdFilm()
    }, [])

    return <div className="container">
        {filme && (
            <div className="details-film">
                <h2>{filme.title}</h2>
                <div className="film-act">
                    <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="" />
                </div>
                <span>
                    {filme.overview}
                </span>
            </div>
        )}
    </div>;
};

export default Filme;
