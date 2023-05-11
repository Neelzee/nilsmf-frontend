import { NavBar } from "../../components/navbar/Navbar";
import { RenderArticle } from "../articles/Article";

// import Component from the react module
import React from "react";
import axios from 'axios'; 
import { GetMedia } from "../../components/media/Media";

export function Home() {

    let media = GetMedia(0);
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
            {getLatest(post, Apost)}
            {media}
        </>
    );
}


function getLatest(articles, authors) {
    let sortedArticles = articles.sort((a, b) => new Date(a.published_date.split("-")) - new Date(b.published_date.split("-")));

    for (let i in sortedArticles) {
        if (sortedArticles[i].is_published) {
            return RenderArticle(sortedArticles[i], authors);
        }
    }
}