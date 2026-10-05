import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./App.tsx";
import CommerceProvider from "./context/CommerceProvider.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <CommerceProvider>
            <RouterProvider router={router} />{" "}
        </CommerceProvider>
    </StrictMode>,
);
