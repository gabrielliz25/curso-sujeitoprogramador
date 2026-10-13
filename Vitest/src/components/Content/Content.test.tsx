import { describe, it } from "vitest"
import { render, screen } from "@testing-library/react"

import Content from "./index"

describe("Renderizar component Content", () => {
    it("Verificar se elementos existem", () => {
        render(<Content />)

        // buscando pela tag html
        const title = screen.getByRole("heading")
        const paragrafo = screen.getByRole("paragraph")

        // verifica se está na pagina
        expect(title).toBeInTheDocument()
        expect(paragrafo).toBeInTheDocument()
    })
    
    it("Verificar se paragrafo está visivel", () => {
        render(<Content />)

        // buscando pelo texto
        const paragraph = screen.getByText("Olá pessoal tudo bem com vcs??")
        
        // verificando se está visivel
        expect(paragraph).toBeVisible()
    })

    it("Verificar se botão está habiltiado", () => {
        render(<Content />)

        // buscar button
        const button = screen.getByText("Enviar")
        
        // verifica se button está habiltiado
        expect(button).toBeEnabled()
    })
})