import { useNavigate } from "react-router-dom";
import { isLoggedIn } from "../../../components/meta/meta-login/MetaLoginComp";
import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar"
import React from "react";

export const MetaHome = () => {

    const navigate = useNavigate();

    React.useEffect(() => {
        if (!isLoggedIn()) {
            navigate("/meta/login");
        }
    })

    

    return (
        <>
            <MetaNavBar />
        </>
    ); 
}