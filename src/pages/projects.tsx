import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import { createEffect, createSignal, onMount } from "solid-js";

export function Projects() {
	const [projects, setProjects] = createSignal<[]>([]);
	const [isLoading, setIsLoading] = createSignal(true);

	onMount(() => {
		axios
			.get(ApiRoot("projects/all"))
			.then((res) => {
				setProjects(res.data);
				setIsLoading(false); // Set loading state to false once data is fetched
			})
			.catch((err) => {
				console.log(err);
				setIsLoading(false); // Set loading state to false in case of an error
			});
	});
	return (
		<>
			<NavBar />
			<main>
				{isLoading ? (
					// Show a loading indicator or message while data is being fetched
					<div>Loading...</div>
				) : (
					// Render the data when it's available
					// biome-ignore lint/suspicious/noExplicitAny: <explanation>
					projects.map((_p: any) => {
						return <article />;
					})
				)}
			</main>
			<Footer />
		</>
	);
}

/**
<Remark
									// @ts-ignore
									remarkPlugins={[remarkGemoji]}
									remarkRehypeOptions={{ allowDangerousHtml: true }}
									// @ts-ignore
									rehypeReactOptions={{
										components: {
											// @ts-ignore
											code: (props) => {
												if (props.className === undefined) {
													return <code>{props.children[0]}</code>;
												}

												return (
													<SyntaxHighlighter
														language={
															props.className.split("-")[
																props.className.split("-").length - 1
															]
														}
														style={dracula}
													>
														{props.children[0]}
													</SyntaxHighlighter>
												);
											},
											// @ts-ignore
											img: (props) => {
												return <RenderImage src={props.src} alt={props.alt} />;
											},
										},
									}}
								>
									{p[1]}
								</Remark>
 */
