import { NavLink } from "react-router-dom";

export function MetaNavBar() {
    return (
        <div className="navbar">
            <NavLink to="/meta/articles">
                <div>
                    Articles
                </div>
            </NavLink>
            <div>
                About
            </div>
        </div>
    );
}