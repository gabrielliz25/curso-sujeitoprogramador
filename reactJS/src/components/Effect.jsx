import { useEffect, useState } from "react";

const Effect = () => {
    const [mostrar, setMostrar] = useState(false);

    // Quando componente for renderizado, vai chamar o useEffect
    useEffect(() => {
        // console.log("Componente foi renderizado");
    });

    return (
        <>
            <h1>Trabalhando com useEffect</h1>

            <button onClick={() => setMostrar(!mostrar)}>
                Mostrar / Esconder Lista
            </button>
            {mostrar && <ListaCompras />}
        </>
    );
};

function ListaCompras() {
    useEffect(() => {
        console.log("Componente montado");

        return () => {
            console.log("Componente desmontado");
        };
    }, []);

    return (
        <>
            <h1>Lista dos produtos: ...</h1>
        </>
    );
}

export default Effect;
