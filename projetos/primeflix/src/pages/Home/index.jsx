import { useState, useEffect } from "react";
import { Link } from "react-router";
import api from "../../services/api";
import "./Home.css";

const Home = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "4f95de02a963d4aa056c46a840e03425",
                    language: "pt-BR",
                    page: 1,
                },
            });
            console.log(response.data.results.slice(0, 10));
            setFilmes(response.data.results.slice(0, 10));
        }

        loadFilmes();
    }, []);

    return (
        <div className="container">
            <div className="lista-filmes">
                <div className="card">
                    {filmes.map((filme) => (
                        <>
                            <h2>{filme.title}</h2>
                            <div className="card-act">
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                                    alt=""
                                />
                                <Link to={`/filme/${filme.id}`}>
                                    <button>Acessar</button>
                                </Link>
                            </div>
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
