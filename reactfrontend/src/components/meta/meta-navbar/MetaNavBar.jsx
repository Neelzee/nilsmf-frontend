import "./MetaNavBar.css";

import { NavLink } from "react-router-dom";



export function MetaNavBar() {
    return (
        <div className="meta-navbar">
            <NavLink to="/meta/articles">
                <div className="meta-btn">
                    Articles
                </div>
            </NavLink>
            <div className="meta-btn">
                About
            </div>
        </div>
    );
}