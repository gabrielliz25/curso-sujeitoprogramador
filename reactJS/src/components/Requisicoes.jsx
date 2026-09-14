import { useState, useEffect } from "react";

const Requisicoes = () => {
    const [nutri, setNutri] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        function loadApi() {
            let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
            fetch(url)
                .then((result) => result.json())
                .then((json) => {
                    setNutri(json);
                    setLoading(false);
                })
                .catch((err) => console.log("Erro ao buscar dados:", err));
        }

        loadApi();
    }, []);

    return (
        <>
            <h1>Trabalhando com Requisições</h1>
            <div>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    nutri.map((item, index) => <p>{item.titulo}</p>)
                )}
            </div>
        </>
    );
};

export default Requisicoes;
