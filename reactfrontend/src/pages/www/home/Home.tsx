import { NavBar } from "../../../components/www/navbar/Navbar"

// import Component from the react module
import React from "react";
import { GetLatestArticle } from "../../../components/www/articles/ArticlesComp";
import { FooterContent } from "../../../components/www/footer/Footer";

export function Home() {
    
    return (
        <>
            <header>
                <NavBar />
            </header>
            {GetLatestArticle()}
            <footer>
                <FooterContent />
            </footer>
        </>
    );
}
