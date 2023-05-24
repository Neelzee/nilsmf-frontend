import { useState, useEffect } from "react"
import { ApiRoot } from "../../utils/Utils";
import { NavLink, useNavigate } from "react-router-dom";
import { React } from "react";

/**
 * Gets the latest article
 * @returns Article-article
 */
export function GetLatestArticle() {
  const [latestArticle, setLatestArticle] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the latest article
        const articleResponse = await fetch(`${ApiRoot()}article/latest/`);
        const articleData = await articleResponse.json();
        setLatestArticle(articleData);

        // Fetch the author for the latest article
        const authorResponse = await fetch(`${ApiRoot()}author/${articleData.author_id}`);
        const authorData = await authorResponse.json();
        setAuthor(authorData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return {article: latestArticle, author: author};
}

/**
 * Gets list of articles
 * @returns list of articles
 */
export function ArticleList(): { article_id: number, title: string, body: string }[] {
  const [articles, setArticles] = useState<{ article_id: number, title: string, body: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the latest articles
        const articleResponse = await fetch(`${ApiRoot()}article/all/`);
        const articleData = await articleResponse.json();
        setArticles(articleData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return articles;
}

/**
 * Renders a "partial article", i.e. the body of the article is stopped.
 * @param article Article object
 * @param author Author object
 * @param char_count How many chars should be shown on the article
 * @returns Rendered article
 */
export function RenderArticlePartial(
  article: { article_id: number; title: string; body: string; published_date: string; },
  author: { first_name: string; last_name: string; },
  char_count: number) {

    return (
        <article key={article.article_id} className="article">
            <h1 className="title">{article.title}</h1>
            <p className="content">{article.body.slice(0, char_count)}...</p>
            <section className="article-info">
                <p>Published: {article.published_date}</p>
                <p>By: {author.first_name} {author.last_name}</p>
                <NavLink to={`/article/${article.article_id}`}>Se meir...</NavLink>
            </section>
        </article>
  );
}

export function RenderArticle(article: { article_id: any; title: any; body: any; published_date: any; }, author: { first_name: any; last_name: any; }) {
  return (
      <article key={article.article_id} className="article">
          <h1 className="title">{article.title}</h1>
          <p className="content">{article.body}</p>
          <section className="article-info">
            <p>Published: {article.published_date}</p>
            <p>By: {author.first_name} {author.last_name}</p>
          </section>
      </article>
  );
}