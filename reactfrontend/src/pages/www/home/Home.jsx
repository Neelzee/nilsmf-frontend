import { NavBar } from "../../../components/www/navbar/Navbar"

// import Component from the react module
import React from "react";
import { GetLatestArticle } from "../../../components/www/articles/ArticlesComp";

export function Home() {
    
    return (
        <>
            <NavBar />
            {GetLatestArticle()}
        </>
    );
}
