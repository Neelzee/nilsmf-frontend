import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import React from "react";
import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";
import { MetaEditor } from "../../../components/meta/meta-editor/MetaEditor";

export function MetaArticlesCreate() {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    });


    return (
        <>
        <header>
            <MetaNavBar />
        </header>
        <main>
            <h1>new article</h1>
            <MetaEditor />
        </main>
        </>
    );
}