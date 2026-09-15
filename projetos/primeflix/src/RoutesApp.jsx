import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/header";

// paginas
import Home from "./pages/Home"
import Filme from "./pages/Filme"
import Favoritos from "./pages/Favoritos"

const RoutesApp = () => {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Filme />} path="/filme/:id" />
            <Route element={<Favoritos />} path="/favoritos" />
        </Routes>
    </BrowserRouter>
};

export default RoutesApp;
