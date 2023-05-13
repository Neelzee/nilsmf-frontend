import { MetaNavBar } from "../../../components/meta/meta-navbar/MetaNavBar";

/**
 * Page that is shown on any non-valid url
 */
export function MetaMissingPage() {
    return (
        <>
        <MetaNavBar />
        <h1>This page is missing</h1>
        <div>Concact IT</div>
        </>
    );
}