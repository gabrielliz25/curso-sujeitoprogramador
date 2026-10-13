import { describe, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Button from "./index.tsx"

describe("Renderizar componente Button na tela", () => {
    it("Renderizar o botão corretamente", () => {
        render(<Button />)

        const button = screen.getByRole("button")
        expect(button).toHaveTextContent("cadastrar")
    })

    it("Mostrar mensagem quando clica no button", () => {
        render(<Button />)

        const button = screen.getByRole("button")
        fireEvent.click(button)

        const msg = screen.getByText("Ola seja bem vindo")
        expect(msg).toBeInTheDocument()
    })    
})

export default {}