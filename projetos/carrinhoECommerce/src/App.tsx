import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Layout from "./components/Layout";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/cart",
                element: <Carrinho />,
            },
        ],
    },
]);

export { router };
