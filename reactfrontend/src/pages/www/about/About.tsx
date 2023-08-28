import { url } from "inspector";
import { FooterContent } from "../../../components/www/footer/Footer";
import { NavBar } from "../../../components/www/navbar/Navbar"
import "./About.scss"

export function About() {



    return (
        <>
        <header>
        </header>
        <main>
            <section id="background-img"></section>
            <span id="hamburger-btn">
                <menu id="hamburger-menu">
                    <ul>
                        <span>
                            Home
                        </span>
                        <span>
                            Project
                        </span>
                        <span>
                            About
                        </span>
                    </ul>
                </menu>
            </span>
            <section id="logo-container">
                <section id="logo"></section>
            </section>
            <section id="overlay-text">
                <h1>Hallo</h1>
                <p>Eg heitar Nils Michael</p>
            </section>
        </main>
        <footer>
            <FooterContent />
        </footer>
        </>
    );
}