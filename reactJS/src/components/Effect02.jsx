import { useEffect, useState } from "react"

const Effect02 = () => {
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const local = localStorage.getItem("produtos")
        setProdutos(() => local ? JSON.parse(local) : [])
    }, [])

    const buscarProdutos = (formData) => {
        const produto = formData.get("add")
        const novaLista = [...produtos, produto]
        setProdutos(novaLista)
        localStorage.setItem("produtos", JSON.stringify(novaLista))
    }

    const handleDelete = (key) => {
        const novaLista = produtos.filter((_, i) => i !== key)
        setProdutos(novaLista)
        localStorage.setItem("produtos", JSON.stringify(novaLista))
    }
    
    return <>
        <h1>Lista de produtos</h1>
    
        <form action={buscarProdutos}>
            <input
                type="text"
                placeholder="Adicionar Produto"
                name="add"
            />
            <button type="submit">Adicionar</button>
        </form>

        <div>
            {produtos && produtos.map((produto, key) => (
                <p>- {produto} 
                    <button onClick={() => handleDelete(key)}>Excluir</button>
                </p>
            ))}
        </div>
    </>
}

export default Effect02;