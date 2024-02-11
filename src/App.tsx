import type { Component } from "solid-js";

import "./styles/root.scss";
import { RenderMarkdown } from "./components/MarkdownRenderer";
import { Footer } from "./components/footer";
import { NavBar } from "./components/navbar";

const App: Component = () => {
	return (
		<>
			<NavBar />
			<main>
				<RenderMarkdown file={"root.md"} />
			</main>
			<Footer />
		</>
	);
};

export default App;
