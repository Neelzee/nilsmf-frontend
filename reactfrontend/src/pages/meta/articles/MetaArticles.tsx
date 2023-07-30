import axios from 'axios'; 
import React from "react";

import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { RenderArticleEdit } from '../../../components/meta/meta-articles/MetaArticlesComp';
import { NavLink, useNavigate } from 'react-router-dom';
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";
import { ApiRoot } from '../../../components/utils/Utils';

export function MetaArticles() {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    })

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
            <MetaNavBar />
        </header>
        <main className="articles">
            <section>
                <NavLink to="/articles">
                    See Articles
                </NavLink>
                <NavLink to="/meta/articles/create">
                    Create new article
                </NavLink>
            </section>
            <aside>
                {//@ts-ignore
                post.map((art) => RenderArticleEdit(art, Apost))}
            </aside>
        </main>
        </>
    );
}