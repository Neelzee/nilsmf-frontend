import { NavBar } from "../../../components/www/navbar/Navbar"

// import Component from the react module
import React from "react";
import { ArticleList, GetLatestArticle } from "../../../components/www/articles/ArticlesComp";
import { FooterContent } from "../../../components/www/footer/Footer";

export function Home() {
    
    let articles = ArticleList();
    articles = [];

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                <aside>
                    <section>
                        <h3>Little about me</h3>
                        <p>I am lit af</p>
                    </section>
                    <section className="articles">
                        {
                            articles.map((article) => {
                                return (
                                    <section>
                                        <h3>{article.title}</h3>
                                        <p>{`${article.body.slice(0, 30)}...`}</p>
                                    </section>
                                );
                            })
                        }
                    </section>
                </aside>
                {GetLatestArticle()}
            </main>
            <footer>
                <FooterContent />
            </footer>
        </>
    );
}
