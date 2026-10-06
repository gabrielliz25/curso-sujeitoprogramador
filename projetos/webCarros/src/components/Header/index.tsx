import { IoLogInOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Logo from "../../assets/logo.svg";

// components
import Container from "../Container";

// react-router-dom
import { Link } from "react-router-dom";

// Context
import { useAuth } from "../../context/useAuth";

const Header = () => {
    const { signed } = useAuth();

    return (
        <header className="border-b border-gray-200 bg-white shadow-sm">
            <Container>
                <div className="flex h-18 w-full items-center justify-between">
                    <Link to="/">
                        <img
                            src={Logo}
                            alt="Logo WebCarros"
                            className="w-37.5 transition duration-100 hover:scale-105"
                        />
                    </Link>

                    {signed ? (
                        <Link
                            to="/dashboard"
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                            <FaRegUserCircle />
                        </Link>
                    ) : (
                        <Link
                            to="/login"
                            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full text-2xl text-gray-700 transition hover:bg-gray-100 hover:text-gray-900"
                        >
                            <IoLogInOutline />
                        </Link>
                    )}
                </div>
            </Container>
        </header>
    );
};

export default Header;
