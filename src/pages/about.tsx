import { RenderMarkdown } from "../components/MarkdownRenderer";
import FetchMarkDown from "../components/fetchmarkdown";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export function About() {
  return (
    <>
      <NavBar />
      <main>
        <FetchMarkDown path={"articles/about-me.md"} fallback />
      </main>
      <Footer />
    </>
  );
}
