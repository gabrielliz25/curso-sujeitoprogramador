import { IoLogInOutline } from "react-icons/io5";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="flex h-18 w-full items-center justify-between border-b border-gray-200 bg-white px-10 shadow-sm">
            <div>
                <Link to="/">
                    <img
                        src={Logo}
                        alt="Logo WebCarros"
                        className="w-37.5 cursor-pointer hover:scale-105 duration-100"
                    />
                </Link>
            </div>

            <div>
                <button className="flex h-12 w-12 items-center justify-center rounded-full text-2xl text-gray-700 transition hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
                    <IoLogInOutline />
                </button>
            </div>
        </header>
    );
};

export default Header;
