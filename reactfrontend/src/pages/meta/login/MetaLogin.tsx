import { LoginForm } from "../../../components/meta/meta-login/MetaLoginComp";
import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";

export function MetaLogin() {
    return (
        <>
        <header>
            <MetaNavBar />
        </header>
        <main>
            <LoginForm />
        </main>
        </>
    );
}