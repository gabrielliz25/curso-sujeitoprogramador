import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import Layout from "./components/Layout";
import Product from "./pages/Product";

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
            {
                path: "/product/:id",
                element: <Product />
            }
        ],
    },
]);

export { router };
