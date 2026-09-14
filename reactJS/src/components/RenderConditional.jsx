const RenderConditional = ({ valor, user }) => {
    return <>
    {valor && <h2>Valor existente: {valor}</h2>}
    {valor === "100" ? <p>Valor 100</p> : <p>Qualquer outro valor</p>}
    <p>
        Olá {user === "Gabriel" ? "ADMIN" : "Visitante"}
    </p>
    </>;
};

export default RenderConditional;
