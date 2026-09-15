import RoutesApp from "./RoutesApp";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css"

const App = () => {
    return (
        <>
            <ToastContainer autoClose={3000} />
            <RoutesApp />
        </>
    );
};

export default App;
