import { describe, it } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"

import Increment from "./index"

describe("Renderizar component Increment", () => {
    it("verificar se button está na tela", () => {
        render(<Increment />)
        
        const button = screen.getByRole("button")
        expect(button).toBeInTheDocument()
    })

    it("verificar se o click está correto", () => {
        render(<Increment />)
    
        const span = screen.getByText("Contador: 0")
        expect(span).toBeInTheDocument()
        
        const button = screen.getByText("+1")
        fireEvent.click(button)

        expect(span).toHaveTextContent("Contador: 1")
    })
})