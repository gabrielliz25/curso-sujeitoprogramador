import { describe, expect, it } from "vitest"
import { render, screen } from "@testing-library/react"

import App from "./App.tsx"

function sum(n1: number, n2: number) {
    return n1 + n2
}

function media(n1: number, n2: number) {
    const soma = n1 + n2
    return soma/2
}

// Criar um bloco que agrupa varios testes relacionados
describe("First test of component App", () => {

    it("should adds 1 + 2 to equal 3", () => {
        expect(sum(1, 2)).toBe(3)
    })

    it("deve calcular a media entre 5 e 15 que vai dar 10", () => {
        expect(media(5, 15)).toBe(10)
    })

    it("Deve renderizar o componente App", () => {
        render(<App />)

        screen.getByText("Pagina teste principal")
        // screen.getByText("Outro texto")
    })

})

export default {}