import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

import { useCommerce } from "../../context/useContext";

const Header = () => {
    const { cartAmount } = useCommerce();

    return (
        <header>
            <nav className="bg-slate-200 flex justify-between items-center px-10 py-3  ">
                <Link to="/" className="font-bold text-lg">
                    Dev Shop
                </Link>

                <Link to="/cart">
                    <BsCart2 size={24} />
                    <span className="absolute right-8 top-2 bg-blue-400 text-white w-5 h-5 flex justify-center items-center rounded-[50%]">
                        {cartAmount}
                    </span>
                </Link>
            </nav>
        </header>
    );
};

export default Header;
