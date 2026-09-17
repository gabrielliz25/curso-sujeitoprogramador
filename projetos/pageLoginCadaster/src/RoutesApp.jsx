import { BrowserRouter, Routes, Route } from "react-router";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadaster from "./pages/Cadaster";

import Header from "./components/Header"

const RoutesApp = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Login />} path="/login" />
                    <Route element={<Cadaster />} path="/cadaster" />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default RoutesApp;
