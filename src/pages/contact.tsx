import { RenderMarkdown } from "../components/MarkdownRenderer";
import FetchMarkDown from "../components/fetchmarkdown";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <FetchMarkDown path={"articles/contact.md"} fallback />
      </main>
      <Footer />
    </>
  );
}
