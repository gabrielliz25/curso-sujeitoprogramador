import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TemaProvider from "./context/TemaProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <TemaProvider>
            <App />
        </TemaProvider>
    </StrictMode>,
);
