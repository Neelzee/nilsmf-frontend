import { RenderMarkdown } from "../components/MarkdownRenderer";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";
import "../styles/root.scss";

export function Root() {
  return (
    <>
      <NavBar />
      <main>
        <RenderMarkdown file={"root.md"} />
      </main>
      <Footer />
    </>
  );
}
