import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import Input from "./index";

describe("renderizar o input na tela", () => {
    it("Verificar a mudança de texto quando digita", () => {
        render(<Input />);

        const input = screen.getByPlaceholderText("Digite o nome");
        fireEvent.change(input, { target: { value: "Gabriel" } });
        
        const span = screen.getByTestId("text");

        expect(span).toHaveTextContent("Bem vindo: Gabriel")
    });
});
