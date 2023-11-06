import { RenderMarkdown } from "../components/MarkdownRenderer";
import { NavBar } from "../components/navbar";

export function Contact() {
  return (
    <>
      <NavBar />
      <main>
        <RenderMarkdown file={"contact.md"} />
      </main>
      <footer>footer</footer>
    </>
  );
}
