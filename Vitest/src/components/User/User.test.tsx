import { describe, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";

import User from "./index";

describe("Renderizar component User", () => {
    it("Checar se os campos estão sendo alterados corretamente", () => {
        render(<User />);

        // capturando todos os elementos do componente
        const nameInput = screen.getByPlaceholderText(
            "Nome",
        ) as HTMLInputElement;

        const emailInput = screen.getByPlaceholderText(
            "Email",
        ) as HTMLInputElement;

        const button = screen.getByRole("button");

        // alterando o valor dos inputs
        fireEvent.change(nameInput, { target: { value: "Gabriel" } });
        fireEvent.change(emailInput, {
            target: { value: "gabriel@gmail.com" },
        });

        // verificando se o valor está chegando
        expect(nameInput.value).toBe("Gabriel");
        expect(emailInput.value).toBe("gabriel@gmail.com");

        const consoleSpy = vitest.spyOn(console, "log");
        fireEvent.submit(button);

        expect(consoleSpy).toHaveBeenCalledWith("Usuario cadastrado!");

        expect(nameInput.value).toBe("");
        expect(emailInput.value).toBe("");
    });
});
