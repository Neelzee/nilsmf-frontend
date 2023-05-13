import { NavBar } from "../../../components/www/navbar/Navbar"

/**
 * Page that is shown on any non-valid url
 */
export function MissingPage() {
    return (
        <>
        <NavBar />
        <h1>This page is missing</h1>
        <div>Come back later</div>
        </>
    );
}