import { RenderMarkdown } from "../components/MarkdownRenderer";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <RenderMarkdown file={"contact.md"} />
      </main>
      <Footer />
    </>
  );
}
