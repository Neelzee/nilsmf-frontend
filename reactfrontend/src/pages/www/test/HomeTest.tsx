import { useEffect, useState } from "react";
import { NavBar } from "../../../components/www/navbar/Navbar";
import "./HomeTest.scss";

export function HomeTest() {

    const content = [
        (
            <span className="tid-bit">
                Eg har ein bachelor i datatekonlogi
            </span>
        ),
        (
            <span className="tid-bit">
                Satisfactory er det beste spillet i verden
            </span>
        ),
        (
            <span className="tid-bit">
                Eg kjem ifrå Nedstrand
            </span>
        ),
    ];

    
    

    return (
        <>
            <header>
                <NavBar />
            </header>
            <main className="main-test">
                <section className="info">
                    <h1>Hei, Eg heitar Nils Michael,</h1>
                    <ContentRotator content={content}/>
                </section>
                <section className="welcome">

                </section>
                <section className="work">

                </section>
            </main>
            <footer>

            </footer>
        </>
    );
}


//@ts-ignore
function ContentRotator(content) {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [content]);
    
    console.log(currentIndex);
    return <article className="text-rotator">{content[currentIndex]}</article>;
}

