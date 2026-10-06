import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

// Private routes
import Private from "./routes/Private";
import NewCar from "./pages/newCar";

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
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/dashboard",
                element: (
                    <Private>
                        <Dashboard />
                    </Private>
                ),
            },
            {
                path: "/dashboard/new",
                element: (
                    <Private>
                        <NewCar />
                    </Private>
                ),
            },
        ],
    },
]);

export { router };
