import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
       <nav>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/meal">Meals</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact Us</NavLink>
       </nav>
    );
};

export default Header;