import { Link, useNavigate } from "react-router";

const Home = () => {
    const navigate = useNavigate()
    
    const navega = () => {
        navigate("/sobre")
    };

    return (
        <>
            <h1>Pagina Home</h1>
            <Link to="/contatos">Contatos</Link> <br />
            <button onClick={navega}>Sobre</button>
        </>
    );
};

export default Home;
