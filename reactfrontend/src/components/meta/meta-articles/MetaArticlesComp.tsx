import { NavLink } from "react-router-dom";
import "./MetaArticles.scss"
import React from "react";

export function RenderArticleEdit(
    article: { author_id: number; article_id: number; is_published: boolean; title: string; published_date: string; published_time: string; },
    authors: { author_id: number, first_name: string, last_name: string}[]) {

    let author = authors.find((a: { author_id: number; }) => a.author_id === article.author_id);

    if (!author) {
        author = {
            author_id: -1,
            first_name: "Uknnown",
            last_name: ""
        }
    }

    return (
      <div key={article.article_id} className={`meta-article ${article.is_published ? "published" : "not-published"}`}>
        <h1 className="meta-title">{article.title}</h1>
        <div className="datetime">
            <div>Published: {article.published_date}</div>
            <div>Time: {article.published_time}</div>
            <div>By: {author.first_name} {author.last_name}</div>
        </div>
        <div className="edit-btns">
            <NavLink className="edit-btn" to={`/meta/articles/edit/${article.article_id}`}>
                Endre
            </NavLink>
            <NavLink className="delete-btn" to={`/meta/articles/edit/${article.article_id}`}>
                Slett
            </NavLink>
        </div>
      </div>
    );
}
