import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home"
import Contatos from "./pages/Contatos"
import Sobre from "./pages/Sobre"
import NotFound from "./pages/NotFound"
import Produtos from "./pages/Produtos"
import Descricao from "./pages/Produtos/descricao"
import Avaliacao from "./pages/Produtos/avaliacao"

const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Contatos/>} path="/contatos"/>
                <Route element={<Sobre />} path="/sobre" />

                <Route element={<Produtos />} path="/produtos/:id">
                    <Route index element={<Descricao />} />
                    <Route path="/produtos/:id/avaliacao" element={<Avaliacao />} />
                </Route>

                <Route element={<NotFound />} path="*" />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp