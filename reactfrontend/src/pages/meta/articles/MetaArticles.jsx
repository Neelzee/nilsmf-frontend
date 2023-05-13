import axios from 'axios'; 
import React from "react";

import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { RenderArticleEdit } from '../../../components/meta/meta-articles/MetaArticlesComp';

export function MetaArticles() {

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
        <MetaNavBar />
        <div className="articles">
            {post.map((art) => RenderArticleEdit(art, Apost))}
        </div>
        </>
    );
}