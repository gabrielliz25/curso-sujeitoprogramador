import { BrowserRouter, Routes, Route } from "react-router";

// pages
import Home from "./pages/Home"
import Post from "./pages/Post";

const RoutesApp = () => {
    return <BrowserRouter>
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Post />} path="/post/:id" />
        </Routes>
    </BrowserRouter>;
};

export default RoutesApp;
