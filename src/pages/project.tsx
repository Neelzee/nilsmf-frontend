import { NavBar } from "../components/navbar";
import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { Footer } from "../components/footer";
import "../styles/articles.scss";
import { RenderImage } from "../components/images";
import "../styles/project.scss";
import { Suspense, createEffect, createSignal, onMount, useTransition } from "solid-js";
import { useParams } from "@solidjs/router";
import { RenderMarkdownText } from "../components/MarkdownRenderer";

export function Project() {
	const [content, setContent] = createSignal("");
	const [isLoading, setIsLoading] = createSignal(true);
	const [pending, start] = useTransition();
	const { file } = useParams();

	start(() => {
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
				<Suspense fallback={<div>Loading...</div>}>
					<article class="article">{<RenderMarkdownText content={content()} />}</article>
				</Suspense>
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
