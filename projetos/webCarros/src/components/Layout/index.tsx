import Header from "../Header";
import { Outlet, useLocation } from "react-router-dom";

const Layout = () => {
    const { pathname } = useLocation();
    const hideHeader = pathname === "/login";

    return (
        <>
            {!hideHeader && <Header />}
            <Outlet />
        </>
    );
};

export default Layout;
