import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home";
import Login from "./pages/login";

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
        ],
    },
]);

export { router };
