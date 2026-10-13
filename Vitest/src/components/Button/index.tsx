import { useState } from "react"

const Button = () => {
    const [message, setMessage] = useState("")

    return <div>

        <button onClick={() => setMessage("Ola seja bem vindo")} >cadastrar</button>
        <span>{message}</span>
    </div>

}

export default Button