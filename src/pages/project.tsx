import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import { RenderImage } from "../components/images";
import "../styles/project.scss";
import { createEffect, createSignal, onMount } from "solid-js";
import { useParams } from "@solidjs/router";

export function Project() {
	const [content, setContent] = createSignal("");
	const [isLoading, setIsLoading] = createSignal(true);
	const { file } = useParams();

	onMount(() => {
		axios
			.get(ApiRoot(`project/${file}`))
			.then((res) => {
				setContent(res.data);
				setIsLoading(false); // Set loading state to false once data is fetched
			})
			.catch((err) => {
				console.error(err);
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
					<article class="article" />
				)}
			</main>
			<Footer />
		</>
	);
}

/*
<Remark
							// @ts-ignore
							remarkPlugins={[remarkGemoji]}
							remarkRehypeOptions={{ allowDangerousHtml: true }}
							// @ts-ignore
							rehypePlugins={[rehypeSlug, rehypeAutoLinkHeadings]}
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
							{content}
						</Remark>
*/
