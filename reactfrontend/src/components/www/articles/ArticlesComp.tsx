import { useState, useEffect } from "react"


export function GetLatestArticle() {
  const [latestArticle, setLatestArticle] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch the latest article
        const articleResponse = await fetch('http://localhost:8000/api/article/latest/');
        const articleData = await articleResponse.json();
        setLatestArticle(articleData);

        // Fetch the author for the latest article
        const authorResponse = await fetch(`http://localhost:8000/api/author/${articleData.author_id}`);
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
 * Renders the given article, with the given author
 * @param {*} article 
 * @param {*} authors 
 * @returns div, containing the article
 */
export function RenderArticle(article, author) {
  return (
      <div key={article.article_id} className="article">
          <h1 className="title">{article.title}</h1>
          <div className="content">{article.body}</div>
          <div>Published: {article.published_date}</div>
          <div>By: {author.first_name} {author.last_name}</div>
      </div>
  );
}