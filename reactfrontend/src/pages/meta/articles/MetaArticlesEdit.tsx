import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { ApiRoot } from "../../../components/utils/Utils";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";

export function MetaArticlesEdit() {

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
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
                const response = await axios.get(`${ApiRoot()}article/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (error) {
                //@ts-ignore
                setError(error.message);
                setLoading(false);
            }
        };  

        fetchData();
    }, [id]);

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
                    {/* @ts-ignore */}
                    <ArticleEditBox authors={[{ author: {author_id: 0, firstname: "Foo", lastname: "Bar"} }]} article={article}/>
                </main>
            </>
        );
}

// TODO
function AllAuthors(): {author_id: number, firstname: string, lastname: string}[] {
    return []
}


function ArticleEditBox(authors: {author_id: number, firstname: string, lastname: string}[], article: {article_id: number, title: string, body: string}) {
    return (
        <>
            <article>
                <label>Tittel:</label>
                <input type="text" placeholder={article.body} id="title-field"></input>
                <label>Innhald:</label>
                <input type="text" placeholder={article.body}></input>
                <label>Forfattar:</label>
                <section id="author-box">
                    {
                        authors.map(a => {
                            return (
                                <>
                                    <p id={`author-field,${a.author_id}`}>{a.firstname} {a.lastname}</p>
                                    <button onClick={() => { RemoveAuthor(a.author_id) }}>Fjern forfattar</button>
                                </>
                            )
                        })
                    }
                </section>
                <section className="add-author">
                    <label>Legg til forfattar</label>
                    <select>
                        {
                            AllAuthors().map(a => {
                                return (
                                    <option value={a.author_id}>{a.firstname} {a.lastname}</option>
                                )
                            })
                        }
                    </select>
                </section>
            </article>
        </>
    );
}


function RemoveAuthor(author_id: number) {

}