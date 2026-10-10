import { describe, it } from "vitest"
import { render, screen } from "@testing-library/react"

import Button from "./index.tsx"

describe("Renderizar componente Button na tela", () => {
    it("Renderizar o botão corretamente", () => {
        render(<Button />)

        screen.getByText("Cadastrar")
    })
})

export default {}