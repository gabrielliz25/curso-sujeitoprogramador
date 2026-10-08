import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import NewCar from "./pages/newCar";
import Details from "./pages/details";
import NotFound from "./pages/notfound";

// Private routes
import Private from "./routes/Private";

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
                path: "/details/:id",
                element: <Details />,
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
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

export { router };
