import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { createSignal, onMount, Suspense, useTransition } from "solid-js";
import { SolidMarkdown } from "solid-markdown";

export function RenderMarkdown(props: { file: string }) {
	const [content, setContent] = createSignal("");
	const [pending, start] = useTransition();

	start(() => {
		axios
			.get(ApiRoot(`articles/${props.file}`))
			.then((res) => {
				setContent(res.data);
			})
			.catch((err) => console.log(err));
	});

	return (
		<article classList={{ pending: pending() }}>
			<Suspense fallback={<div class="loader">Loading...</div>}>
				<SolidMarkdown>{content()}</SolidMarkdown>
			</Suspense>
		</article>
	);
}

export function RenderMarkdownText(props: { content: string }) {
	return (
		<article>			
			<SolidMarkdown>{props.content}</SolidMarkdown>
		</article>
	);
}