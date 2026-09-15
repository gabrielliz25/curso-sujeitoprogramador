import { Link } from "react-router";
import "./header.css";

const Header = () => {
    return (
        <nav className="menu">
            <Link className="logo" to="/">PrimeFilx</Link>
            <Link className="favoritos" to="/favoritos">Meus Filmes</Link>
        </nav>
    );
};

export default Header;
