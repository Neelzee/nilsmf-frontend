import { RenderMarkdown } from "../components/MarkdownRenderer";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export function About() {
	return (
		<>
			<NavBar />
			<main>
				<RenderMarkdown file={"about-me.md"} />
			</main>
			<Footer />
		</>
	);
}
