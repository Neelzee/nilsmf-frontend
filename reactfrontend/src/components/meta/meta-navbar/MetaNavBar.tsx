import React from 'react';
import { NavLink } from 'react-router-dom';
import { LogoutButton, isLoggedIn } from '../meta-login/MetaLoginComp';
import "./MetaNavBar.scss";

export function MetaNavBar() {
    const loggedIn = isLoggedIn(); // Call isLoggedIn function to get login status

    return (
        <nav className="meta-navbar">
            <NavLink to="/meta/articles">
                <div className="meta-btn">Articles</div>
            </NavLink>
            {loggedIn && <LogoutButton />}
            <div className="meta-btn">
                About
            </div>
        </nav>
    );
}
