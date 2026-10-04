import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterProvider from "./context/CounterProvider.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </StrictMode>,
);
