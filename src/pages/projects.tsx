import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import { Suspense, createEffect, createSignal, onMount, useTransition } from "solid-js";
import { RenderMarkdownText } from "../components/MarkdownRenderer";

export function Projects() {
	const [projects, setProjects] = createSignal<string[][]>([]);
	const [isLoading, setIsLoading] = createSignal(true);
	const [pending, start] = useTransition();

	start(() => {
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
				<Suspense fallback={<div>Loading...</div>}>
					{
						projects().map((p: string[]) => {
							return <RenderMarkdownText content={p[1]} />;
						})
					}
				</Suspense>
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
