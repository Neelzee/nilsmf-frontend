import axios from "axios";
import { ApiRoot } from "../utils/funcs";
import { createEffect, createSignal, onMount } from "solid-js";
import { SolidMarkdown } from "solid-markdown";

export function RenderMarkdown(props: { file: string }) {
	const [content, setContent] = createSignal("# NO DATA FOUND");

	onMount(() => {
		axios
			.get(ApiRoot(`articles/${props.file}`))
			.then((res) => {
				setContent(res.data);
			})
			.catch((err) => console.log(err));
	});

	return (
		<article>
			<SolidMarkdown>{content()}</SolidMarkdown>
		</article>
	);
}
