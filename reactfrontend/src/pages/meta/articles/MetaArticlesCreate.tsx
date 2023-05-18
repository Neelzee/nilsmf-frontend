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
        const title = (document.getElementById("title") as HTMLInputElement)?.value;
        const fpMediaInput = (document.getElementById("frontpage-media") as HTMLInputElement);
        const fpDescription = (document.getElementById("fp-description") as HTMLInputElement)?.value;
        const mediaType = (document.getElementById("media-type") as HTMLInputElement).value;
        const isPublished = (document.getElementById("published") as HTMLInputElement).checked;
        const ckEditorContent = editorData;

        let fpMedia = fpMediaInput?.files?.[0];

        const formData = new FormData();
        if (fpMedia != null) {
            formData.append('frontpage_media', fpMedia);
        }
        formData.append('title', title);
        formData.append('fp_media_description', fpDescription);
        formData.append('fp_media_type', mediaType === video ? "1" : "0");
        formData.append("body", ckEditorContent);
        formData.append('is_published', isPublished ? "1" : "0");

        axios.post(`${ApiRoot()}create-article/`, formData)
            .then(response => {
                if (response.status === 200) {
                    return response.data;
                } else {
                    alert(`Failed to save article:\n${response}`);
                }
            })
            .then(data => {
                // Handle the response data as needed
                console.log(data);
            })
            .catch(error => {
                // Handle the error
                alert(`Failed to save article:\n${error}`);
            });
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
