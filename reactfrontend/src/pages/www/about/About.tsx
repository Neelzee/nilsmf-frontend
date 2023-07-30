import { FooterContent } from "../../../components/www/footer/Footer";
import { NavBar } from "../../../components/www/navbar/Navbar"

export function About() {
    return (
        <>
        <header>
            <NavBar />
        </header>
        <main>
            <h1>Halla</h1>
            <div>Me</div>
        </main>
        <footer>
            <FooterContent />
        </footer>
        </>
    );
}