import { NavBar } from "../../../components/www/navbar/Navbar"
import axios from 'axios'; 
import React from "react";
import "./Article.scss";
import { RenderArticle, RenderArticlePartial } from "../../../components/www/articles/ArticlesComp";
import { FooterContent } from "../../../components/www/footer/Footer";
import { ApiRoot } from "../../../components/utils/Utils";
import { useNavigate, useParams } from 'react-router-dom';

/**
 * This function returns the page, that shows all the posted articles
 * @returns Article page
 */
export function Articles() {

    const [post, setPost] = React.useState(null);
    const [Apost, AsetPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(`${ApiRoot()}author/all/`).then(res => {
            AsetPost(res.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get(`${ApiRoot()}article/all/`).then(res => {
            setPost(res.data)
        });
    }, []);

    if (!post || !Apost) {
        return null;
    }


    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            {post.map((art) => (
                art.is_published
                    ? RenderArticlePartial(art, Apost, 400)
                    : null
            ))}
        </main>
        <footer>
            <FooterContent />
        </footer>
        </>
    );
}

function getAuthor(id, authors) {
    for (let i in authors) {
        if (authors[i].author_id === id) {
            return authors[i].first_name + " " + authors[i].last_name;
        }
    }
    
    return "God"
}


/**
 * Gets the specified article
 * @returns Article-article
 */
export function GetArticle(article_id: number): { article, author} {
    const [article, setArticle] = React.useState(null);
    const [author, setAuthor] = React.useState(null);
  
    React.useEffect(() => {
      async function fetchData() {
        try {
          // Fetch the latest article
          const articleResponse = await fetch(`${ApiRoot()}article/${article_id}`);
          const articleData = await articleResponse.json();
          setArticle(articleData);
  
          // Fetch the author for the latest article
          const authorResponse = await fetch(`${ApiRoot()}author/${articleData.author_id}`);
          const authorData = await authorResponse.json();
          setAuthor(authorData);
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchData();
    }, [article_id]);
  
    return {article: article, author: author};
}

/**
 * 
 * @returns Single article
 */
export function Article() {

    const { id } = useParams();

    const navigate = useNavigate();

    React.useEffect(() => {
        if (id === undefined) {
            navigate("/invalid-article-id/");
        }
    })


    const article_object = GetArticle(id === undefined ? 0 : parseInt(id));

    if (article_object === null || article_object.article === null || article_object.author === null) {
        return (
            <>
                <header>
                    <NavBar />
                </header>
                <main>
                    <h2>Loading</h2>
                </main>
                <footer>
                    <FooterContent />
                </footer>
            </>
        );
    }

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main>
                {RenderArticle(article_object.article, article_object.author)}
            </main>
            <footer>
                <FooterContent />
            </footer>
        </>
    );
}