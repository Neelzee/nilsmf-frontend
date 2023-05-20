import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";
import { MetaEditor } from "../../../components/meta/meta-editor/MetaEditor";
import React, { useEffect } from 'react';
import "./meta-articles-create.scss";
import axios from 'axios';
import { ApiRoot } from "../../../components/utils/Utils";


export function MetaArticlesCreate() {

    const navigate = useNavigate();

    const [editorData, setEditorData] = React.useState("")

    const handleEditorChange = (data: string) => {
        setEditorData(data);
    }


    let isVideo = false;

    const video = "video"

    const mediaTypes = [
        video,
        "image"
    ];

    

    const SaveArticle = () => {
        
    };

    useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    }, []);

    
    return (
        <>
        <header>
            <MetaNavBar />
        </header>
        <main className="main">
            {/* Article */}
            <article className="editor-container">
                {/* Title */}
                <section className="title-input container">
                    <label>Title:</label>
                    <input type="text" placeholder="New Article" id="title" />
                </section>
                {/* Frontpage media */}
                <section className="frontpage-container container">
                    <label>Frontpage Media:</label>
                    <input type="file" id="frontpage-media" />
                </section>
                {/* Frontpage media description */}
                <section className="container">
                    <label>Description:</label>
                    <input type="text" placeholder="Describe the image" id="fp-description"/>
                </section>
                {/* Frontpage media type */}
                <section className="container">
                    <label>Media type:</label>
                    <select id="media-type">
                        {mediaTypes.map(media => {
                            return <option value={media} key={media}>{media.charAt(0).toUpperCase() + media.slice(1)}</option>
                        })}
                    </select>
                </section>
                {/* CKEditor */}
                <MetaEditor article={{ body: "" }} onEditorChange={handleEditorChange} />
            </article>
            {/* Buttons */}
            <aside className="btn-container">
                <section className="is-published">
                    <label>Is Published:</label>
                    <input type="checkbox" id="published"/>
                </section>
                <section className="container">
                    <label>Frontpage Media:</label>
                    {isVideo
                        ? <video src="" alt="" />
                        : <img src="" alt="" />
                    }
                </section>
                <button className="btn save-btn" onClick={SaveArticle}>
                    Save
                </button>
            </aside>
        </main>
        </>
    );
}
