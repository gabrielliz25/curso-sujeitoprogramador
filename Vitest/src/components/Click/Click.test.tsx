import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Click from "./index";

describe("Renderizar component Click", () => {
    it("onClick deve ser chamado", () => {
        // simula uma função
        const onClick = vitest.fn();

        // passa os props do componente
        render(
            <Click onClick={onClick} disabled={true}>
                Meu botão
            </Click>,
        );

        const button = screen.getByText("Meu botão");
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalled();
    });

    it("background red deve ser renderizado com botão desabilitado", () => {
        render(
            <Click onClick={() => {}} disabled={true}>
                Meu botão
            </Click>,
        );

        const button = screen.getByRole("button", { name: "Meu botão" });
        expect(button).toHaveStyle({ backgroundColor: "#0f0" })
    });
});

export default {};
