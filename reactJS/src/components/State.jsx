import { useState } from "react"
import RenderState from "./RenderState"

const State = () => {
    const [cupom, setCupom] = useState("#100K2026")
    const [valor, setValor] = useState(0)

    const resgatar = () => {
        setCupom("Cupom Resgatado")
    }

    return <>
        <p>Cupom de desconto: {cupom}</p>
        <button onClick={resgatar}>Resgatar Cupom</button>

        <p>Contador: {valor}</p>
        <button onClick={() => setValor(valor + 1)}>+1</button> 
        <button onClick={() => setValor(valor - 1)}>-1</button>

        <hr />

        <RenderState estado={cupom} valor={valor} />
    </>
}

export default State