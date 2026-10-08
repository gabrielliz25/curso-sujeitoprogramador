import { createBrowserRouter } from "react-router";

// pages
import Home from "./pages/home";

const router = createBrowserRouter([
    {
        children: [
            {
                path: "/",
                element: <Home />,
            },
        ],
    },
]);

export { router };
