import "./navbar.scss";


import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/" className="btn">
                Home
            </NavLink>
            <NavLink to="/articles" className="btn pages">
                Projects
            </NavLink>
            <NavLink to="/about" className="btn pages">
                About
            </NavLink>
            <a href="https://github.com/Neelzee/" className="btn socials github">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/nils-michael-fitjar-4346a3234/" className="btn socials linkedin">
                LinkedIN
            </a>
        </nav>
    );
}