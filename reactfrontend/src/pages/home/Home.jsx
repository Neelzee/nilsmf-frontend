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
        Promise.all([
            axios.get("http://localhost:8000/api/article/latest/"),
            axios.get(`http://localhost:8000/api/author/${post?.author_id}/`)
        ]).then(([postRes, authorRes]) => {
            setPost(postRes.data);
            AsetPost(authorRes.data);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    if (!post) {
        return (
        <>
            <NavBar />
            <h1>Loading...</h1>
        </>
        );
    }

    return (
        <>
            <NavBar />
            {RenderArticle(post, Apost)}
            {media}
        </>
    );
}
