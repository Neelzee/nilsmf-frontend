import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { ApiRoot } from "../../../components/utils/Utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { React } from "react";
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";

export function MetaArticlesEdit(article_id: number) {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    });

    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            const fetchData = async () => {
            try {
                const response = await axios.get(ApiRoot() + 'article/' + article_id);
                setArticle(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };  

        fetchData();
    }, [article_id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
        return (
            <>
                <header>
                    <MetaNavBar />
                </header>
                <main>
                    <article>
                        <label>Title</label>
                        <input type="text" placeholder={article.title} id="title-field"/>
                        <p id="content-field">{article.body}</p>
                        <p id="author-field"></p>
                        <p id="date-field"></p>
                        <p id="time-field"></p>
                        <input type="checkbox" id="is-posted-field"/>
                    </article>
                </main>
            </>
        );
}
