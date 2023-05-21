import { useState, useEffect } from "react"
import { ApiRoot } from "../../utils/Utils";

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

  return RenderArticle(latestArticle, author);
}

/**
 * Gets list of articles
 * @returns list of articles
 */
export function ArticleList(): { title: string, body: string }[] {
  const [articles, setArticles] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the latest article
        const articleResponse = await fetch(`${ApiRoot()}article`);
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

export function RenderArticle(article: { article_id: any; title: any; body: any; published_date: any; }, author: { first_name: any; last_name: any; }) {
  return (
      <article key={article.article_id} className="article">
          <h1 className="title">{article.title}</h1>
          <div className="content">{article.body}</div>
          <div>Published: {article.published_date}</div>
          <div>By: {author.first_name} {author.last_name}</div>
      </article>
  );
}