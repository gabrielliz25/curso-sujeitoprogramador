import { useParams, Outlet } from "react-router";

const Produtos = () => {
    const { id } = useParams();

    return (
        <>
            <h1>Página do produto: {id}</h1>

            <Outlet />
        </>
    );
};

export default Produtos;
