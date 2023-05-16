import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";
import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";
import { useNavigate } from "react-router-dom";
import React from "react";

/**
 * Page that is shown on any non-valid url
 */
export function MetaMissingPage() {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    })

    return (
        <>
        <header>
            <MetaNavBar />
        </header>
        <h1>This page is missing</h1>
        <div>Concact IT if it should not be missing</div>
        </>
    );
}