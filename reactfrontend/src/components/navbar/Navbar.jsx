import "./navbar.css";
import { HomeButton, ProjectsButton } from "./NavBarButtons";



import { NavLink } from "react-router-dom";

export function NavBar() {
    return (
        <div className="navbar">
                <NavLink to="/">
                    <HomeButton />
                </NavLink>

                <div className="page">
                    <NavLink to="/articles">
                        <ProjectsButton />
                    </NavLink>
                </div>


            <div className="socials">
                <div>
                    <a href="https://github.com/Neelzee/">
                        GitHub
                    </a>
                </div>
                <div>
                    <a href="https://www.linkedin.com/in/nils-michael-fitjar-4346a3234/">
                        LinkedIN
                    </a>
                </div>
            </div>
        </div>
    );
}