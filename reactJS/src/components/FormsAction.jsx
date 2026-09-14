const FormsAction = () => {

    const buscar = (formData) => {
        const busca = formData.get("busca")
        alert(busca)
    }

    return (
        <>
            <h1>Trabalhando com Formulários - Actions</h1>

            <form action={buscar}>
                <input
                    type="text"
                    placeholder="Está procurando por algo?"
                    name="busca"
                />

                <button type="submit">Buscar</button>
            </form>
        </>
    );
};

export default FormsAction;
