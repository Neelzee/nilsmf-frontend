import axios from "axios";
import { createSignal, useTransition, Suspense, JSX } from "solid-js";
import { SolidMarkdown } from "solid-markdown";
import { ApiRoot } from "../utils/funcs";

export default function FetchMarkDown(
  props: {
    path: string,
    fallback: JSX.Element | undefined,
  }
) {
  const [content, setContent] = createSignal("");
  const [pending, start] = useTransition();
  const path = props.path;
  const fallback = props.fallback === undefined ? <div>Loading...</div> : props.fallback;

  start(() => {
    axios
      .get(ApiRoot(path))
      .then((res) => {
        setContent(res.data);
      })
      .catch((err) => console.error(err));
  });


  return (
    <article classList={{ pending: pending() }}>
      <Suspense fallback={fallback}>
        <SolidMarkdown>{content()}</SolidMarkdown>
      </Suspense>
    </article>
  );

}

