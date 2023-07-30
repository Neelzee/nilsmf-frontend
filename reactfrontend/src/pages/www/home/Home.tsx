import { NavBar } from "../../../components/www/navbar/Navbar"

// import Component from the react module
import React from "react";
import { ArticleList, GetLatestArticle, RenderArticle } from "../../../components/www/articles/ArticlesComp";
import { FooterContent } from "../../../components/www/footer/Footer";

import "./home.scss";

export function Home() {
    
    let articles = ArticleList();

    let article_object = GetLatestArticle();

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="main-home">
                <aside className="sidebar">
                    <section className="about-me">
                        <h3>Little about me</h3>
                        <p>I am lit af</p>
                    </section>
                    <section className="small-articles">
                        {
                            articles
                                .filter((article) => article_object.article.article_id !== article.article_id)
                                .map((article) => (
                                <section key={article.article_id} className="small-article">
                                    <h3 className="small-title">{article.title}</h3>
                                    <p className="small-content">{`${article.body.slice(0, 30)}...`}</p>
                                </section>
                                ))
                        }
                    </section>
                </aside>
                <section className="latest-article">
                    {RenderArticle(article_object.article, article_object.author)}
                </section>
            </main>
            <footer>
                <FooterContent />
            </footer>
        </>
    );
}
