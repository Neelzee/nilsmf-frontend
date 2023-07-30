import { NavBar } from "../../../components/www/navbar/Navbar"

/**
 * Page that is shown on any non-valid url
 */
export function MissingPage() {
    return (
        <>
        <NavBar />
        <main>
            <h1>This page is missing</h1>
            <p>Come back later</p>
        </main>
        </>
    );
}