import { NavBar } from "../../../components/www/navbar/Navbar"
import axios from 'axios'; 
import React from "react";
import "./Article.css";
import { RenderArticle } from "../../../components/www/articles/ArticlesComp";

/**
 * This function returns the page, that shows all the posted articles
 * @returns Article page
 */
export function Articles() {

    const [post, setPost] = React.useState(null);
    const [Apost, AsetPost] = React.useState(null);

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/author/all/").then(res => {
            AsetPost(res.data);
        });
    }, []);

    React.useEffect(() => {
        axios.get("http://localhost:8000/api/article/all/").then(res => {
            setPost(res.data)
        });
    }, []);

    if (!post || !Apost) {
        return null;
    }


    return (
        <>
        <NavBar />
            {post.map((art) => (
                art.is_published
                    ? RenderArticle(art, Apost)
                    : null
            ))}
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