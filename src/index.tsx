/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";
import "./styles/index.scss";
import App from "./App";
import { About } from "./pages/about";
import { Project } from "./pages/project";
import { Contact } from "./pages/contact";
import { Projects } from "./pages/projects";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

render(
	() => (
		<Router>
			<Route path="/" component={App} />
			<Route path="/about" component={About} />
			<Route path="/contact" component={Contact} />
			<Route path="/projects" component={Projects} />
			<Route path="/projects/:file" component={Project} />
		</Router>
	),
	// biome-ignore lint/style/noNonNullAssertion: <explanation>
	root!,
);
