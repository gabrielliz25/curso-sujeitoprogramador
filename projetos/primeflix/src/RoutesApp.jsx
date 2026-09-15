import { BrowserRouter, Routes, Route } from "react-router"
import Header from "./components/header";

// paginas
import Home from "./pages/Home"
import Filme from "./pages/Filme"

const RoutesApp = () => {
    return <BrowserRouter>
        <Header />
        <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Filme />} path="/filme/:id" />
        </Routes>
    </BrowserRouter>
};

export default RoutesApp;
