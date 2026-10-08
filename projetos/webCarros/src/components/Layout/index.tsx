import Header from "../Header";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify"

const Layout = () => {
    const { pathname } = useLocation();
    const hideHeader = pathname === "/login" || pathname === "/register";

    return (
        <>
            {!hideHeader && <Header />}
            <Outlet />
            <ToastContainer />
        </>
    );
};

export default Layout;
