import { RenderMarkdown } from "../components/MarkdownRenderer";
import { NavBar } from "../components/navbar";

export function About() {
  return (
    <>
      <NavBar />
      <main>
        <RenderMarkdown file={"about-me.md"} />
      </main>
      <footer>footer</footer>
    </>
  );
}
